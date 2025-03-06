function TodoList({ tasks, deleteTask, completeTask }) {
  console.log('yoo:', tasks);

  return (
    <div className='flex flex-col justify-center items-center max-w-3xl m-auto'>
      {/* {Render task NOT done:} */}
      {tasks
        .filter((task) => !task.done)
        .map((task, index) => (
          <div
            key={task.id}
            className='flex flex-col gap-4 justify-center items-center p-4 '
          >
            <div className='flex justify-center items-center gap-4  '>
              <label className='relative flex items-center cursor-pointer'>
                <input
                  type='checkbox'
                  onChange={() => completeTask(task.id)}
                  checked={task.done}
                  className='peer hidden'
                />
                <div className='w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-secondary peer-checked:border-gray-400 transition duration-200'></div>
              </label>

              <h2 className='text-xl break-all w-full'>{task.todo}</h2>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <p className='text-gray-500'>{task.date}</p>
              <button
                onClick={() => deleteTask(task.id)}
                className='bg-black text-white py-1 px-4 rounded-3xl cursor-pointer'
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}

      <hr className='w-full max-w-3xl m-auto my-8 border-gray-300' />
      <p className='flex justify-center opacity-50 mt-4'>
        {tasks.filter((task) => task.done).length > 0 ? (
          <>Completed: {tasks.filter((task) => task.done).length}</>
        ) : null}
      </p>

      {/* {Render task done:} */}
      {tasks
        .filter((task) => task.done)
        .map((task, index) => (
          <div
            key={task.id}
            className='flex flex-col gap-4 justify-center items-center p-4 '
          >
            <div className='flex justify-center items-center gap-4 '>
              <label className='relative flex items-center cursor-pointer'>
                <input
                  type='checkbox'
                  onChange={() => completeTask(task.id)}
                  checked={task.done}
                  className='peer hidden'
                />
                <div className='w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-secondary peer-checked:border-gray-400 transition duration-200'></div>
              </label>

              <h2 className='text-xl line-through text-gray-500 break-all w-full'>
                {task.todo}
              </h2>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <p className='text-gray-500'>{task.date}</p>
              <button
                onClick={() => deleteTask(task.id)}
                className='bg-black text-white py-1 px-4 rounded-3xl cursor-pointer'
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
export default TodoList;
