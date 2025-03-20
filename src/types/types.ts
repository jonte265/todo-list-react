export type TasksProps = {
  todo: string;
  date: string;
  done: boolean;
  edit: boolean;
  id: number;
};

export type AddTaskFunction = (newTask: TasksProps) => void;
export type DeleteTaskFunction = (id: number) => void;
export type CompleteTaskFunction = (id: number) => void;
export type EditTaskFunction = (id: number, updateText: string) => void;
export type EditModeFunction = (id: number) => void;
