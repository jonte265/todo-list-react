import {
  TasksProps,
  DeleteTaskFunction,
  CompleteTaskFunction,
  EditTaskFunction,
  EditModeFunction,
} from '../types/types';

type TodoListProps = {
  tasks: TasksProps[];
  deleteTask: DeleteTaskFunction;
  completeTask: CompleteTaskFunction;
  editTask: EditTaskFunction;
  editMode: EditModeFunction;
  editText: string;
  setEditText: React.Dispatch<React.SetStateAction<string>>;
};

function TodoList({
  tasks,
  deleteTask,
  completeTask,
  editTask,
  editMode,
  editText,
  setEditText,
}: TodoListProps) {
  function handleEditInput(event: React.ChangeEvent<HTMLInputElement>) {
    setEditText(event.target.value);
  }
  return (
    <div className='flex flex-col justify-center items-center max-w-80 m-auto'>
      <p className='flex justify-center text-text-muted dark:text-text-muted-dark my-4'>
        {tasks.filter((task) => !task.done).length > 0 ? (
          <>Tasks: {tasks.filter((task) => !task.done).length}</>
        ) : null}
      </p>
      {/* Render tasks that are NOT done */}
      {tasks
        .filter((task) => !task.done)
        .map((task) =>
          task.edit ? (
            <div
              key={task.id}
              className='flex flex-col gap-4 justify-center items-start p-4 w-full'
            >
              <div className='flex items-start gap-4 w-full'>
                <input
                  className='bg-background rounded-4xl shadow p-4 transition-all duration-75'
                  type='text'
                  value={editText}
                  onChange={handleEditInput}
                  required
                />
              </div>
              <div className='flex items-center gap-4'>
                <button
                  onClick={() => editTask(task.id, editText)}
                  className=' text-text  cursor-pointer flex justify-center items-center'
                >
                  <span
                    className='material-icons dark:text-text-dark hover:scale-120 active:scale-90 transition-all duration-75'
                    style={{ fontSize: '16px' }}
                  >
                    check
                  </span>
                </button>
                <button
                  onClick={() => editMode(task.id)}
                  className=' text-text  cursor-pointer flex justify-center items-center'
                >
                  <span
                    className='material-icons dark:text-text-dark hover:scale-120 active:scale-90 transition-all duration-75'
                    style={{ fontSize: '16px' }}
                  >
                    close
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div
              key={task.id}
              className='flex flex-col gap-4 justify-center items-start p-4 w-full'
            >
              <div className='flex items-center justify-center gap-4 w-full'>
                <label className='relative flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    onChange={() => completeTask(task.id)}
                    checked={task.done}
                    className='peer hidden'
                  />
                  <div className='w-5 h-5 border-2 border-text-muted dark:border-text-muted-dark rounded-full flex items-center justify-center peer-checked:bg-secondary peer-checked:border-text-muted dark:peer-checked:border-b-text-muted-dark transition duration-200'></div>
                </label>

                <h2 className='text-xl break-all text-left w-full dark:text-text-dark'>
                  {task.todo}
                </h2>
              </div>
              <div className='flex items-center gap-4 '>
                <p className='text-text-muted dark:text-text-muted-dark '>
                  {task.date}
                </p>

                <button
                  onClick={() => editMode(task.id)}
                  className=' text-text  cursor-pointer flex justify-center items-center'
                >
                  <span
                    className='material-icons dark:text-text-dark hover:scale-120 active:scale-90 transition-all duration-75'
                    style={{ fontSize: '16px' }}
                  >
                    edit
                  </span>
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className=' text-text  cursor-pointer flex justify-center items-center'
                >
                  <span
                    className='material-icons dark:text-text-dark hover:scale-120 active:scale-90 transition-all duration-75'
                    style={{ fontSize: '16px' }}
                  >
                    delete_forever
                  </span>
                </button>
              </div>
            </div>
          )
        )}

      <hr className='w-full max-w-3xl m-auto my-8 border-gray-300' />
      <p className='flex justify-center text-text-muted dark:text-text-muted-dark my-4'>
        {tasks.filter((task) => task.done).length > 0 ? (
          <>Completed: {tasks.filter((task) => task.done).length}</>
        ) : null}
      </p>

      {/* Render tasks that are done */}
      {tasks
        .filter((task) => task.done)
        .map((task) =>
          task.edit ? (
            <div
              key={task.id}
              className='flex flex-col gap-4 justify-center items-start p-4 w-full'
            >
              <div className='flex items-start gap-4 w-full'>
                <input
                  className='bg-background rounded-4xl shadow p-4 transition-all duration-75'
                  type='text'
                  value={editText}
                  onChange={handleEditInput}
                  required
                />
              </div>
              <div className='flex items-center gap-4'>
                <button
                  onClick={() => editTask(task.id, editText)}
                  className=' text-text  cursor-pointer flex justify-center items-center'
                >
                  <span
                    className='material-icons dark:text-text-dark hover:scale-120 active:scale-90 transition-all duration-75'
                    style={{ fontSize: '16px' }}
                  >
                    check
                  </span>
                </button>
                <button
                  onClick={() => editMode(task.id)}
                  className=' text-text  cursor-pointer flex justify-center items-center'
                >
                  <span
                    className='material-icons dark:text-text-dark hover:scale-120 active:scale-90 transition-all duration-75'
                    style={{ fontSize: '16px' }}
                  >
                    close
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div
              key={task.id}
              className='flex flex-col gap-4 justify-center items-start p-4 w-full'
            >
              <div className='flex items-center justify-center gap-4 w-full'>
                <label className='relative flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    onChange={() => completeTask(task.id)}
                    checked={task.done}
                    className='peer hidden'
                  />
                  <div className='w-5 h-5 border-2 border-text-muted dark:border-text-muted-dark rounded-full flex items-center justify-center peer-checked:bg-secondary peer-checked:border-text-muted dark:peer-checked:border-b-text-muted-dark transition duration-200'></div>
                </label>

                <h2 className='text-xl line-through text-text-muted dark:text-text-muted-dark break-all text-left w-full'>
                  {task.todo}
                </h2>
              </div>
              <div className='flex items-center gap-4'>
                <p className='text-text-muted dark:text-text-muted-dark'>
                  {task.date}
                </p>

                <button
                  onClick={() => editMode(task.id)}
                  className=' text-text  cursor-pointer flex justify-center items-center'
                >
                  <span
                    className='material-icons dark:text-text-dark hover:scale-120 active:scale-90 transition-all duration-75'
                    style={{ fontSize: '16px' }}
                  >
                    edit
                  </span>
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className=' text-text  cursor-pointer flex justify-center items-center'
                >
                  <span
                    className='material-icons dark:text-text-dark hover:scale-120 active:scale-90 transition-all duration-75'
                    style={{ fontSize: '16px' }}
                  >
                    delete_forever
                  </span>
                </button>
              </div>
            </div>
          )
        )}
    </div>
  );
}

export default TodoList;
