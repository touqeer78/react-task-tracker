export type Task = {
  id: number;
  title: string;
  completed: boolean;
  due_date?: string; // ISO string (e.g. "2024-07-27")
};
