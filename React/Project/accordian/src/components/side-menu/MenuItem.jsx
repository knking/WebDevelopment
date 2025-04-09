
import React, { useState } from 'react'
import MenuList from './MenuList'

function MenuItem({item}) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggle(getCurrentTitle){

        setDisplayCurrentChildren({
            ...displayCurrentChildren, [getCurrentTitle]:!displayCurrentChildren[getCurrentTitle]
        })
    }

  return <li className='ml-2'>

    <div className='flex items-center gap-5 cursor-pointer'>
    <p>{item.title}</p> 
    {
        item && item.submenu && item.submenu.length  ? <span className='cursor-pointer'  onClick={()=>handleToggle(item.title)}>
            
             {
                displayCurrentChildren[item.title] ? '-' :'+'
             }
            
            </span>: null
    }
    </div>
        
        {
            item && item.submenu && item.submenu.length > 0  && displayCurrentChildren[item.title]? <MenuList key={item.title} list={item.submenu}/>: null
        }
    </li>
  
}

export default MenuItem