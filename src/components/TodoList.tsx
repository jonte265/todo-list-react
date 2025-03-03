function TodoList({ todolist }) {
  return (
    <div>
      <ul>
        {todolist.map((tasks, index) => (
          <div>
            <li key={index}>{tasks}</li>
            <button>Edit</button>
            <button>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
