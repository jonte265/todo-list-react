function TodoList({ todolist }) {
  console.log('yoo:', todolist);

  return (
    <div>
      {todolist.map((tasks, index) => (
        <div className='flex flex-col gap-4 justify-center items-center items-centertext-2xl p-4 '>
          <div className='flex justify-center items-center gap-2'>
            <input
              className='w-6 h-6 rounded-full appearance-none border-2 border-gray-400 checked:bg-blue-500 checked:border-blue-500 focus:outline-none cursor-pointer transition duration-200'
              type='checkbox'
            />
            <h2 className='text-2xl'>{tasks.todo}</h2>
          </div>
          <p className='text-gray-500'>{tasks.date}</p>
          <p className='text-gray-500'>{tasks.done}</p>
          <p className='text-gray-500 text-xs'>{tasks.id}</p>

          <div className='flex flex-row gap-2'>
            <button className='bg-primary text-white py-2 px-6 rounded-3xl cursor-pointer '>
              Edit
            </button>
            <button className='bg-primary text-white py-2 px-6 rounded-3xl cursor-pointer '>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TodoList;
