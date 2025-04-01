import React, { useState } from 'react'

function Text() {
    const [editMode, setEditMode] =  useState(false)
    const [val, setVal] = useState("Double click me to edit")
  return (
    <div>
        <h2>Edit mode demo</h2>
        {
            editMode ? (<input type='text'/>):({val})
        }
        </div>
  )
}

export default Text