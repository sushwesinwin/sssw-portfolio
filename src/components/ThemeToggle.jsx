import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme}
      className='p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700'
    >
      {isDarkMode ? (
        <FiSun className='text-yellow-400' />
      ) : (
        <FiMoon className='text-gray-900 dark:text-white' />
      )}
    </button>
  )
}

export default ThemeToggle