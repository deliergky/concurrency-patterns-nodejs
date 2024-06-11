import { Task, TaskResult } from './task'

// First stage: Process the input task and pass the result to the next stage
const stage1 = async (task: Task): Promise<TaskResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...task, stage1: `Processed in stage 1` })
    }, 500)
  })
}

// Second stage: Process the result from stage 1 and pass the result to the next stage
const stage2 = async (task: TaskResult): Promise<TaskResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...task, stage2: `Processed in stage 2` })
    }, 500)
  })
}

// Third stage: Process the result from stage 2 and produce the final result
const stage3 = async (task: TaskResult): Promise<TaskResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...task, stage3: `Processed in stage 3` })
    }, 500)
  })
}

// Pipeline function: Run the tasks through the pipeline stages concurrently
const pipeline = async (tasks: Task[]): Promise<TaskResult[]> => {
  const results: TaskResult[] = []

  for (const task of tasks) {
    const result1 = await stage1(task)
    const result2 = await stage2(result1)
    const result3 = await stage3(result2)
    results.push(result3)
  }

  return results
}

export { pipeline }
