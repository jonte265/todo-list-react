import Header from '../components/Header';
import Footer from '../components/Footer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import {
  TasksProps,
  AddTaskFunction,
  DeleteTaskFunction,
  CompleteTaskFunction,
  EditTaskFunction,
  EditModeFunction,
} from '../types/types';

type HomeProps = {
  tasks: TasksProps[];
  addTask: AddTaskFunction;
  deleteTask: DeleteTaskFunction;
  completeTask: CompleteTaskFunction;
  editTask: EditTaskFunction;
  editMode: EditModeFunction;
};

function Home({
  tasks,
  addTask,
  deleteTask,
  completeTask,
  editTask,
  editMode,
  editText,
  setEditText,
}: HomeProps) {
  return (
    <>
      <Header />
      <main className=' p-4 bg-background flex items-center justify-center flex-col flex-wrap gap-4 '>
        <TodoForm addTask={addTask} tasks={tasks} />
        <TodoList
          deleteTask={deleteTask}
          completeTask={completeTask}
          tasks={tasks}
          editTask={editTask}
          editMode={editMode}
          editText={editText}
          setEditText={setEditText}
        />
      </main>
      <Footer />
    </>
  );
}

export default Home;
