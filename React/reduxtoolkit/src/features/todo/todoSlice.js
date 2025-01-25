
import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {

    todos:[{ id:1,text:"i am todo" }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.id)
        },
        updateTodo : (state,action)=>{
            state.todos.map((todo)=>todo.id === (action.id) ? state.todos.text = action.payload.txt:state.todos.text)
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer