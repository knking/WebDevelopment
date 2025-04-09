import React from 'react'
import MenuList from './MenuList'

function NavMenu({menus =[]}) {
  return (
    <div className='min-h-screen w-[350px] bg-violet-500 text-white text-2xl'>
        <MenuList  list={menus}/>
    </div>
  )
}

export default NavMenu