import Header from '../components/Header';
import Footer from '../components/Footer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import {
  TasksProps,
  AddTaskFunction,
  DeleteTaskFunction,
  CompleteTaskFunction,
} from '../types/types';

type HomeProps = {
  tasks: TasksProps[];
  addTask: AddTaskFunction;
  deleteTask: DeleteTaskFunction;
  completeTask: CompleteTaskFunction;
};

function Home({ tasks, addTask, deleteTask, completeTask }: HomeProps) {
  return (
    <>
      <Header />
      <main className=' p-4 bg-background flex items-center justify-center flex-col flex-wrap gap-4 '>
        <TodoForm addTask={addTask} tasks={tasks} />
        <TodoList
          deleteTask={deleteTask}
          completeTask={completeTask}
          tasks={tasks}
        />
      </main>
      <Footer />
    </>
  );
}

export default Home;
