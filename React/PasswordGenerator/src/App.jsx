
import './App.css'

function App() {
  

  return (
    <>
      <div className='w-[550px] h-28 bg-slate-500 rounded-xl mx-auto mt-32 p-2'>
        <input type="text" className='mt-3 p-2 w-[475px] rounded-l' value={"hshnrnfnv"} placeholder='Password' readOnly/> 
        <button className='p-2 bg-blue-700 text-white rounded-r outline-none '>Copy</button>
        <div className='mt-3 text-orange-600 w-96 text-center flex gap-2'>
          
          <input type="range" name="length" />
          <label htmlFor="length">Length(8)</label>
          
          <input type="checkbox" name="number" />
          <label htmlFor="number">Number</label>
          
          <input type="checkbox" name="character" />
          <label htmlFor="character">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
