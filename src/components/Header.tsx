import { useState } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
    document.body.classList.toggle('dark');
  }

  return (
    <nav className='bg-blue-500 dark:bg-amber-300 p-4 flex justify-center gap-8 items-center '>
      <a className='text-3xl font-semibold' href='#'>
        ToDo Master
      </a>
      {darkMode ? (
        <button
          className='cursor-pointer flex items-center justify-center'
          onClick={handleDarkMode}
        >
          <span className='material-icons' style={{ fontSize: '30px' }}>
            light_mode
          </span>
        </button>
      ) : (
        <button
          className='cursor-pointer flex items-center justify-center'
          onClick={handleDarkMode}
        >
          <span className='material-icons' style={{ fontSize: '30px' }}>
            dark_mode
          </span>
        </button>
      )}
    </nav>
  );
}

export default Header;
