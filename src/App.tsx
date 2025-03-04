import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);

    setTasks(updatedTasks);
  }

  function completeTask(index) {
    console.log('done:', index);

    // If index match change done: true
    const updatedCompleteTasks = tasks.map((task, i) => {
      if (i === index) {
        if (task.done === false) {
          return { ...task, done: true };
        } else {
          return { ...task, done: false };
        }
      } else {
        return task;
      }
    });

    setTasks(updatedCompleteTasks);
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
