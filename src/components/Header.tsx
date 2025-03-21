import { useState } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
    document.body.classList.toggle('dark');
  }

  return (
    <nav className='bg-background dark:bg-background-dark p-4 flex justify-center gap-8 items-center '>
      <a className='text-3xl font-semibold dark:text-text-dark' href='#'>
        ToDo Master
      </a>
      {darkMode ? (
        <button
          className='cursor-pointer flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-75'
          onClick={handleDarkMode}
        >
          <span
            className='material-icons dark:text-text-dark'
            style={{ fontSize: '30px' }}
          >
            light_mode
          </span>
        </button>
      ) : (
        <button
          className='cursor-pointer flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-75'
          onClick={handleDarkMode}
        >
          <span
            className='material-icons dark:text-text-dark'
            style={{ fontSize: '30px' }}
          >
            dark_mode
          </span>
        </button>
      )}
    </nav>
  );
}

export default Header;
