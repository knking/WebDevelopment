
function Card({title}) {
  return (
    <>
      <div className="max-w-l w-96 p-6 rounded-md shadow-md bg-black">
        <img
          src="https://m.media-amazon.com/images/I/81dT7CUY6GL.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {title}
          </span>
          {/* <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2> */}
        </div>
        {/* <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p> */}
      </div>
    
    </>
  )
}

export default Card