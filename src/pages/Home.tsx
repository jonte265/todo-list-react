import Header from '../components/Header';
import Footer from '../components/Footer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function Home({ tasks, addTask, deleteTask, completeTask }) {
  return (
    <>
      <Header />
      <main className=' p-4 bg-background py-40'>
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
