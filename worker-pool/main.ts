import { tasks, Task } from './task'

const maxConcurrency = require('os').cpus().length

const performTask = (task: Task): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${task.id} completed`)
    }, task.duration)
  })
}

const runTask = async (task: Task): Promise<string> => {
  return await performTask(task)
}

const handleTasks = async () => {
  const sum = tasks.reduce((acc, task) => acc + task.duration, 0)
  console.log('Sum of expected duration values in ms:', sum)

  const taskQueue = [...tasks]
  const results: string[] = []

  console.time('worker-pool')
  while (taskQueue.length > 0) {
    const activeTasks: Task[] = []
    activeTasks.push(...taskQueue.splice(0, maxConcurrency))
    console.log(
      `Task queue: ${taskQueue.length} - Active tasks: ${activeTasks.length}`
    )
    const result = await Promise.all(activeTasks.map(runTask))
    results.push(...result)
  }
  console.timeEnd('worker-pool')

  console.log('Results:', results)
}

handleTasks()
