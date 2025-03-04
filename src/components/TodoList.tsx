function TodoList({ todolist }) {
  console.log('yoo:', todolist);

  return (
    <div>
      {todolist.map((tasks, index) => (
        <div className='flex flex-col gap-4 justify-center items-center items-centertext-2xl p-4 '>
          <h2 className='text-2xl'>{tasks.todo}</h2>
          <p className='text-gray-500'>{tasks.date}</p>
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
