import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>

        <div className='border-2  border-red-600'>
    <form className='flex flex-col items-center justify-center'>
        <input type="email" name="" id="" placeholder='Enter Email' className='border-2 border-emerald-600 rounded-full py-4 px'/>
        <input type="password" name="" id="" placeholder='Enter Password' />
        <button>Log in</button>
    </form>
        </div>
    </div>
  )
}

export default Login