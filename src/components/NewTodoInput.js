import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todos/todoSlice";
import { v4 as uuidv4 } from 'uuid';

const NewTodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleSave = () => {

    if(newTodo ==='') return;

      const todoItem = {
        id:uuidv4(),
        completed:false,
        todo:newTodo
      } 

      dispatch(addTodo(todoItem));
      setNewTodo('');
  };

  return (
    <Box sx={{ mb: 2, p:2 }}>
      <Typography variant="h6" gutterBottom>
        Add a Todo
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <TextField
          variant="outlined"
          size="medium"
          value={newTodo}
          placeholder="add a todo..."
          sx={{ flexGrow: 1, marginRight: 2, borderRadius: '50%' }}
          required
          onChange={(e) => setNewTodo( e.target.value )}
        />
        <Button 
        variant="contained" 
        color="primary" 
        size="small"
        sx={{borderRadius: '12px', paddingX: "10px", paddingY: "10px"}}
        onClick={handleSave}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default NewTodoInput;
