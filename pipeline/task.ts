export interface Task {
  id: number;
  data: string;
}

export interface TaskResult extends Task {
  stage1?: string;
  stage2?: string;
  stage3?: string;
}

export const tasks: Task[] = [
  { id: 1, data: 'Task 1 data' },
  { id: 2, data: 'Task 2 data' },
  { id: 3, data: 'Task 3 data' }
];
