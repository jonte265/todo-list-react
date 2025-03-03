function TodoList({ todolist }) {
  return (
    <div>
      <ul>
        {todolist.map((tasks, index) => (
          <div className='flex flex-col justify-center items-center'>
            <li key={index} className='text-2xl p-4'>
              {tasks}
            </li>
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
      </ul>
    </div>
  );
}
export default TodoList;
