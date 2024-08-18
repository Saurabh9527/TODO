
import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setTodo } from '../redux/features/todos/todoSlice';

const useFetchTodos = () => {
    const dispatch = useDispatch();

    const fetchTodos = async () => {
        try {
            const { data } = await axios.get('https://dummyjson.com/todos');
            const todos = data.todos;
            dispatch(setTodo(todos)); 
        } catch (error) {
            console.log(error);       
        }
    }

    useEffect( () => {
        fetchTodos();
    }, []);
}

export default useFetchTodos
