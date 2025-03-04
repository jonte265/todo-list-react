import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(index) {
    console.log('Clicked', index);

    const updatedTasks = tasks.filter((element, i) => i !== index);

    setTasks(updatedTasks);
  }

  return (
    <>
      <Home tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
    </>
  );
}

export default App;
