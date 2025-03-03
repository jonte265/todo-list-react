function TodoForm() {
  return (
    <div className='flex justify-center p-4'>
      <input
        className='bg-background rounded-4xl shadow p-4 w-3xs transition-all duration-75'
        type='text'
        name=''
        id=''
        placeholder='Enter task...'
        required
      />
      <button className='bg-secondary py-4 px-8 rounded-4xl cursor-pointer ml-2 hover:opacity-80 hover:scale-105 active:opacity-60 active:scale-95 transition-all duration-75'>
        Add task
      </button>
    </div>
  );
}

export default TodoForm;
