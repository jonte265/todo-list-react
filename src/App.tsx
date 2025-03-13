import Home from './pages/Home';
import { useEffect, useState } from 'react';

type TasksProps = {
  todo: string;
  date: string;
  done: boolean;
  id: number;
};

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  function saveLocalStorage(tasks: TasksProps[]) {
    localStorage.setItem('todo-list', JSON.stringify(tasks));
  }

  function loadLocalStorage() {
    const data = localStorage.getItem('todo-list');
    return data ? JSON.parse(data) : [];
  }

  useEffect(() => {
    console.log('First time load localstorage');
    setTasks(loadLocalStorage());
  }, []);

  function addTask(newTask: TasksProps) {
    saveLocalStorage([...tasks, newTask]);

    const data = loadLocalStorage();
    setTasks(data);
  }

  function deleteTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    saveLocalStorage(updatedTasks);
    const data = loadLocalStorage();
    setTasks(data);
  }

  function completeTask(id: number) {
    // If index match change done to true
    const updatedCompleteTasks = tasks.map((task) => {
      if (task.id === id) {
        if (task.done === false) {
          return { ...task, done: true };
        } else {
          return { ...task, done: false };
        }
      } else {
        return task;
      }
    });

    saveLocalStorage(updatedCompleteTasks);
    const data = loadLocalStorage();
    setTasks(data);
  }

  return (
    <>
      <Home
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </>
  );
}

export default App;
