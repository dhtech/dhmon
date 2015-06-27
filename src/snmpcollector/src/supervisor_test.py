import actions
import supervisor

if __name__ == '__main__':
  stage = supervisor.Supervisor()
  stage.purge(actions.Trigger)

