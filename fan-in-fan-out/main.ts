import { tasks, Task } from './task'

// Simulate processing a task
const processTask = async (task: Task): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${task.id} processed with data: ${task.data}`)
    }, task.duration)
  })
}

// Fan-out: Distribute tasks to be processed concurrently
const fanOut = async (tasks: Task[]): Promise<Promise<string>[]> => {
  return tasks.map((task) => processTask(task))
}

// Fan-in: Collect results from all tasks
const fanIn = async (taskPromises: Promise<string>[]): Promise<string[]> => {
  return Promise.all(taskPromises)
}

const runFanOutFanIn = async () => {
  try {
    console.time('fan-out/fan-in')
    const taskPromises = await fanOut(tasks)
    const results = await fanIn(taskPromises)
    console.log('Fan-out/Fan-in results:', results)
    console.timeEnd('fan-out/fan-in')

    results.splice(0, results.length)
    console.time('sync')
    for (const task of tasks) {
      const t = await processTask(task)
      results.push(t)
    }
    console.log('Sync results:', results)
    console.timeEnd('sync')
    
  } catch (error) {
    console.error('Error in Fan-out/Fan-in pattern:', error)
  }
}

runFanOutFanIn()
