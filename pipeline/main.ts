import { pipeline } from './pipeline'
import { tasks, TaskResult } from './task'

const runPipeline = async () => {
  try {
    const results: TaskResult[] = await pipeline(tasks)
    console.log('Pipeline results:', results)
  } catch (error) {
    console.error('Error running pipeline:', error)
  }
}

runPipeline()
