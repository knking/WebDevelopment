import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
   
  const data = useLoaderData()
    // const [data,setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res) => res.json())
    //     .then((data)=>setData(data))
    // })

  return (
    <div className='text-center m-4 p-4 bg-gray-500 text-white text-3xl'>Github followers:{data.followers} 
    
    <img src={data.avatar_url} alt="img-h" className='text-center' width={"200px"}/>
    </div>
  )
}

export default Github

export const githubInfoLoader= async () =>{
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}