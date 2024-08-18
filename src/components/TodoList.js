
import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import LoadingIndicator from './LoadingIndicator';

const TodoList = () => {
  
  const todos = useSelector((store)=> store?.todos?.todo);
  
  if(todos.length <=0 ){
    return <LoadingIndicator />
  }

  return (
    <Box
    sx={{ mb: 2, p:2 }}
    >
      {
        todos?.map( (todo) => (
          <TodoItem todo={todo} key={todo.id}/>
        ))
      }
    </Box>
  )
}

export default TodoList
