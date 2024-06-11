import { startHeartbeats } from './heartbeat'
import { tasks } from './task'


const interval = 2000 // 2 seconds

const runHeartbeat = async () => {
  startHeartbeats(tasks, interval)
}

;(async () => {
  try {
    await runHeartbeat()
  } catch (error) {
    console.error(error)
  }
})()
