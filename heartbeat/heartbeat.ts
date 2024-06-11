import { Task } from './task'

const processTask = async (task: Task): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task ${task.id} processed with data: ${task.data}`)
      resolve()
    }, task.duration)
  })
}

const startHeartbeat = (task: Task, interval: number) => {
  setInterval(async () => {
    await processTask(task)
  }, interval)
}

const startHeartbeats = (tasks: Task[], interval: number) => {
  tasks.forEach((task) => startHeartbeat(task, interval))
}

export { startHeartbeats }
