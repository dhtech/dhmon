import mock
import unittest

import actions
import stage
import trigger


class TestTrigger(unittest.TestCase):

  def setUp(self):
    self.logic = trigger.Trigger()
    patcher = mock.patch('time.time')
    self.addCleanup(patcher.stop)
    self.mock_time = patcher.start()
    self.mock_time.return_value = 1234

  @mock.patch('stage.Stage')
  def testTriggerNoTag(self, mock_stage_class):
    mock_stage = mock_stage_class.return_value
    expected_run = actions.RunInformation(
            '', trace={'Trigger': (1234, 1234)})

    self.logic.trigger('')
    mock_stage.push.assert_called_with(mock.ANY, expected_run, expire=5000)

  @mock.patch('stage.Stage')
  def testTriggerTag(self, mock_stage_class):
    mock_stage = mock_stage_class.return_value
    expected_run = actions.RunInformation(
            'my_tag', trace={'Trigger': (1234, 1234)})

    self.logic.trigger('my_tag')
    mock_stage.push.assert_called_with(mock.ANY, expected_run, expire=5000)


def main():
  unittest.main()


if __name__ == '__main__':
  main()
