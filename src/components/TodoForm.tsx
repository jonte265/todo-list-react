import { useState } from 'react';
import TodoList from './TodoList';

function TodoForm() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleInput(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  return (
    <>
      <div>
        <div className='flex justify-center p-4'>
          <input
            className='bg-background rounded-4xl shadow p-4 w-3xs transition-all duration-75'
            type='text'
            placeholder='Enter task...'
            required
            value={newTask}
            onChange={handleInput}
          />
          <button
            onClick={addTask}
            className='bg-secondary py-4 px-8 rounded-4xl cursor-pointer ml-2 hover:opacity-80 hover:scale-105 active:opacity-60 active:scale-95 transition-all duration-75'
          >
            Add task
          </button>
        </div>

        <TodoList todolist={tasks} />
      </div>
    </>
  );
}

export default TodoForm;
