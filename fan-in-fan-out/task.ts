export interface Task {
  id: number
  data: string
  duration: number
}

export const tasks: Task[] = [
  { id: 1, data: 'Task 1 data', duration: 1000 },
  { id: 2, data: 'Task 2 data', duration: 2000 },
  { id: 3, data: 'Task 3 data', duration: 1500 },
  { id: 4, data: 'Task 4 data', duration: 2500 },
]
