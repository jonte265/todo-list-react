export type TasksProps = {
  todo: string;
  date: string;
  done: boolean;
  id: number;
};

export type AddTaskFunction = (newTask: TasksProps) => void;
export type DeleteTaskFunction = (id: number) => void;
export type CompleteTaskFunction = (id: number) => void;
