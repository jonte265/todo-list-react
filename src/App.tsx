import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  function completeTask(id) {
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

    console.log(updatedCompleteTasks);

    const sortedTasks = updatedCompleteTasks.sort((a, b) => a.done - b.done);
    console.log(sortedTasks);

    setTasks(sortedTasks);
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
