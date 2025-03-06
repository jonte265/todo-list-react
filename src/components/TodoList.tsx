function TodoList({ tasks, deleteTask, completeTask }) {
  console.log('yoo:', tasks);

  return (
    <div>
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className='flex flex-col gap-4 justify-center items-center p-4 '
        >
          <div className='flex justify-center items-center gap-2 '>
            <input
              onChange={() => completeTask(task.id)}
              className='w-6 h-6 rounded-full appearance-none border-2 border-gray-400 checked:bg-secondary checked:border-gray-400 focus:outline-none cursor-pointer transition duration-200'
              type='checkbox'
            />
            <h3>{task.id}</h3>
            <h2
              className={`text-xl ${
                task.done ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.todo}
            </h2>
          </div>
          <p className='text-gray-500'>{task.date}</p>

          <button
            onClick={() => deleteTask(task.id)}
            className='bg-primary text-white py-2 px-6 rounded-3xl cursor-pointer '
          >
            🗑️ Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default TodoList;
