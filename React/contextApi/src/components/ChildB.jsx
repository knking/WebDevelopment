import React, { useContext } from 'react'
import ChildC from './ChildC'
// import { myContext } from '../App'
function ChildB() {
    // const demo = useContext(myContext)
  return (
    <div>

        <ChildC/>
        {/* <p>I am hrere for {demo.name}</p> */}
    </div>
  )
}

export default ChildB