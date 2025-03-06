import { useState } from 'react';

function TodoForm({ addTask, tasks }) {
  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState('');

  function handleInput(event) {
    setNewTask(event.target.value);
  }

  function handleDate(event) {
    setNewDate(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodoTask = {
      todo: newTask,
      date: newDate,
      done: false,
      id: Date.now(),
    };

    //Send task up to home state
    addTask(newTodoTask);
    setNewTask('');
    setNewDate('');
  }

  return (
    <>
      <div>
        <div className='flex justify-center p-4'>
          <form
            className='flex flex-col gap-6'
            action=''
            onSubmit={handleSubmit}
          >
            <input
              className='bg-background rounded-4xl shadow p-4 w-3xs transition-all duration-75'
              type='text'
              placeholder='Enter task...'
              required
              value={newTask}
              onChange={handleInput}
            />
            <input
              className='bg-background rounded-4xl shadow p-4 w-3xs transition-all duration-75 '
              type='date'
              required
              value={newDate}
              onChange={handleDate}
            />
            <button
              type='submit'
              className='bg-secondary py-4 px-8 rounded-4xl cursor-pointer ml-2 hover:opacity-80 hover:scale-105 active:opacity-60 active:scale-95 transition-all duration-75'
            >
              ➕ Add task
            </button>
          </form>
        </div>

        <p className='flex justify-center opacity-50 mt-4'>
          Tasks: {tasks.filter((task) => !task.done).length}
        </p>
      </div>
    </>
  );
}

export default TodoForm;
