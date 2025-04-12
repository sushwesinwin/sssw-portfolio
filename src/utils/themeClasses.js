export const darkModeClasses = {
    nav: {
      base: 'fixed top-0 z-50 bg-transparent shadow-md w-full',
      dark: 'bg-black text-white',
      light: 'bg-white text-gray-900'
    },
    button: {
      base: 'p-2 rounded-full transition-colors',
      hover: 'hover:bg-gray-200 dark:hover:bg-gray-700'
    },
    text: {
      base: 'text-sm font-medium hover:text-blue-600 transition-colors',
      dark: 'text-white',
      light: 'text-gray-900'
    },
    mobileMenu: {
      base: 'md:hidden',
      dark: 'bg-black',
      light: 'bg-white'
    }
  }