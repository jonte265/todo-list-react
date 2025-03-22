import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { TasksProps } from './types/types';

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  const [editText, setEditText] = useState('');

  function saveLocalStorage(tasks: TasksProps[]) {
    localStorage.setItem('todo-list', JSON.stringify(tasks));
  }

  function loadLocalStorage(): TasksProps[] {
    const data = localStorage.getItem('todo-list');
    return data ? JSON.parse(data) : [];
  }

  useEffect(() => {
    console.log('First time load localstorage');
    const loadTasks = loadLocalStorage();

    const resetEditMode = loadTasks.map((task) => ({ ...task, edit: false }));

    saveLocalStorage(resetEditMode);

    setTasks(loadLocalStorage());
  }, []);

  function addTask(newTask: TasksProps) {
    saveLocalStorage([...tasks, newTask]);

    const data = loadLocalStorage();
    setTasks(data);
  }

  function deleteTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    saveLocalStorage(updatedTasks);
    const data = loadLocalStorage();
    setTasks(data);
  }

  function completeTask(id: number) {
    // If index match change done to true
    const updatedCompleteTasks = tasks.map((task) => {
      if (task.id === id) {
        if (task.done === false) {
          return { ...task, done: true };
        } else {
          return { ...task, done: false };
        }
      } else {
        return task;
      }
    });

    saveLocalStorage(updatedCompleteTasks);
    const data = loadLocalStorage();
    setTasks(data);
  }

  function editMode(id: number) {
    const updatedCompleteTasks = tasks.map((task) => {
      if (task.id === id) {
        if (task.edit === false) {
          setEditText(task.todo);
          return { ...task, edit: true };
        } else {
          return { ...task, edit: false };
        }
      } else {
        return { ...task, edit: false };
      }
    });

    saveLocalStorage(updatedCompleteTasks);
    const data = loadLocalStorage();
    setTasks(data);
  }

  function editTask(id: number, updateText: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, todo: updateText, edit: false };
      }
      return task;
    });

    saveLocalStorage(updatedTasks);
    setTasks(updatedTasks);
  }

  return (
    <>
      <Home
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        completeTask={completeTask}
        editTask={editTask}
        editMode={editMode}
        editText={editText}
        setEditText={setEditText}
      />
    </>
  );
}

export default App;
