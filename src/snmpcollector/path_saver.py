import logging
import multiprocessing as mp
import stage


class PathSaver(stage.Stage):

  def __init__(self, task_queue):
    logging.info('Starting path saver')
    super(PathSaver, self).__init__(task_queue, 'path_saver', workers=1)

  def startup(self):
    import dhmon
    self.es = dhmon.ElasticsearchBackend()
    self.es.connect()
    logging.info('Pre-warming path cache')
    self.cache = self.es.scan_paths()
    logging.info('Started path saver thread %d', self.pid)
    logging.info('Pre-warmed cache with %d entries', len(self.cache))

  def do(self, task):
    work = task - self.cache
    if work:
      tree = dhmon.PathTree()
      for path in work:
        tree.update(path.split('.'))
      logging.info('Committing paths, %d values currently', len(self.cache))
      es.add_path_tree(tree, skip=self.cache,
          callback=lambda x: self.cache.add(x))

  def shutdown(self):
    logging.info('Terminating path saver thread %d', self.pid)
