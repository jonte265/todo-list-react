import {
  TasksProps,
  DeleteTaskFunction,
  CompleteTaskFunction,
} from '../types/types';

type TodoListProps = {
  tasks: TasksProps[];
  deleteTask: DeleteTaskFunction;
  completeTask: CompleteTaskFunction;
};

function TodoList({ tasks, deleteTask, completeTask }: TodoListProps) {
  return (
    <div className='flex flex-col justify-center items-center max-w-80 m-auto'>
      {/* Render tasks that are NOT done */}
      {tasks
        .filter((task) => !task.done)
        .map((task) => (
          <div
            key={task.id}
            className='flex flex-col gap-4 justify-center items-start p-4 w-full'
          >
            <div className='flex items-start gap-4 w-full'>
              <label className='relative flex items-center cursor-pointer'>
                <input
                  type='checkbox'
                  onChange={() => completeTask(task.id)}
                  checked={task.done}
                  className='peer hidden'
                />
                <div className='w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-secondary peer-checked:border-gray-400 transition duration-200'></div>
              </label>

              <h2 className='text-xl break-all text-left w-full'>
                {task.todo}
              </h2>
            </div>
            <div className='flex items-center gap-4'>
              <p className='text-gray-500'>{task.date}</p>
              <button
                onClick={() => deleteTask(task.id)}
                className=' text-text  cursor-pointer flex justify-center items-center'
              >
                <span className='material-icons' style={{ fontSize: '16px' }}>
                  delete_forever
                </span>
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

      {/* Render tasks that are done */}
      {tasks
        .filter((task) => task.done)
        .map((task) => (
          <div
            key={task.id}
            className='flex flex-col gap-4 justify-center items-start p-4 w-full'
          >
            <div className='flex items-start gap-4 w-full'>
              <label className='relative flex items-center cursor-pointer'>
                <input
                  type='checkbox'
                  onChange={() => completeTask(task.id)}
                  checked={task.done}
                  className='peer hidden'
                />
                <div className='w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-secondary peer-checked:border-gray-400 transition duration-200'></div>
              </label>

              <h2 className='text-xl line-through text-gray-500 break-all text-left w-full'>
                {task.todo}
              </h2>
            </div>
            <div className='flex items-center gap-4'>
              <p className='text-gray-500'>{task.date}</p>
              <button
                onClick={() => deleteTask(task.id)}
                className=' text-text  cursor-pointer flex justify-center items-center'
              >
                <span className='material-icons' style={{ fontSize: '16px' }}>
                  delete_forever
                </span>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TodoList;
