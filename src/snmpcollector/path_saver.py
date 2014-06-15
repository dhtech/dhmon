import logging
import multiprocessing as mp


class PathSaver(object):

  STOP_TOKEN = None

  def __init__(self, task_queue):
    workers = 1
    logging.info('Starting path saver')
    self.task_queue = task_queue
    self.workers = workers
    self.name = 'path_saver'
    for pid in range(workers):
      p = mp.Process(target=self.worker, args=(pid, ), name=self.name)
      p.start()

  def stop(self):
    for pid in range(self.workers):
      self.task_queue.put(self.STOP_TOKEN)
    self.task_queue.join()

  def worker(self, pid):
    try:
      import procname
      procname.setprocname(self.name)
    except ImportError:
      pass
    import dhmon
    es = dhmon.ElasticsearchBackend()
    es.connect()
    cache = es.scan_paths()
    logging.info('Started path saver thread %d', pid)
    logging.info('Pre-warmed cache with %d entries', len(cache))
    tree = dhmon.PathTree()
    for task in iter(self.task_queue.get, self.STOP_TOKEN):
      work = task - cache
      if work:
        for path in work:
          tree.update(path.split('.'))
        logging.info('Committing paths, %d values currently', len(cache))
        es.add_path_tree(tree, skip=cache, callback=lambda x: cache.add(x))
        tree = dhmon.PathTree()
      self.task_queue.task_done()

    self.task_queue.task_done()
    logging.info('Terminating path saver thread %d', pid)
