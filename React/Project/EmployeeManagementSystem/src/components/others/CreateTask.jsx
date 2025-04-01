import React from 'react'

function CreateTask() {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded"> 
    <form action="" className="flex w-full flex-wrap items-start justify-between ">
      <div className="w-1/2">
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400" type="text" placeholder="Make a ui design" />
      </div>
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400" type="date" name="date" id="" />
      </div>

      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Assin To</h3>
        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400" type="text" placeholder="Employye name" />
      </div>

      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400" type="text" placeholder="design,dev,etc" />
      </div>
      </div>
    
      <div className="w-1/2 flex flex-col items-start">
        <h3>description</h3>
        <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
          name="textarea"
          id="textarea"
          rows={10}
          cols={30}
        ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ">Create Task</button>
      </div>

    
    </form>
  </div>
  )
}

export default CreateTask