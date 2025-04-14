import React from 'react'
import useLocalStroage from './useLocalStroage'
import './theme.css'

function DarkLight() {

    const [theme, setTheme] = useLocalStroage('theme','dark')

    function handleTheme(){
        setTheme(theme === 'light' ? 'dark' :'light')
    }
    console.log(theme);
    
  return (
    <div className='flex w-full flex-col h-screen justify-center items-center gap-2 themeSwitch' data-theme={theme}>

<h1 className='text-2xl'>Hello World!</h1>
<button className='py-2 px-4 cursor-pointer border-0 rounded-xl' onClick={handleTheme} >Change Theme</button>
    </div>
  )
}

export default DarkLight