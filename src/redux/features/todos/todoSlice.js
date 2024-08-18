import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: [],
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {

        setTodo: ( state, action ) => {
            state.todo.push(...action.payload);  
        },


        addTodo: ( state, action ) => {
            state.todo.unshift(action.payload); 
        },

        editTodo: ( state, action ) => {
            const { editTodoId , editTodoText } = action.payload; 
            const findTodo = state.todo.find((t) => t.id === editTodoId);  
            if(findTodo) {
                findTodo.todo=editTodoText;
            }   
        },

        markCompleteTodo: ( state, action ) => {
            const todoId = action.payload
            const findTodo = state.todo.find((t) => t.id === todoId);
            if (findTodo) {
                findTodo.completed = !findTodo.completed;
            }  
        },

        deleteTodo: ( state, action ) => {  
            const todoId = action.payload 
            const updatedTodos = state.todo.filter((t) => t.id !== todoId);
            state.todo = updatedTodos;             
        },
    },
})

export const { 
    setTodo, addTodo, editTodo, markCompleteTodo, deleteTodo 
} = todoSlice.actions

export default todoSlice.reducer