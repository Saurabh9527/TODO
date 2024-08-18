  import { Box, Checkbox, IconButton, TextField, Typography } from "@mui/material";
  import React, { useState } from "react";
  import EditIcon from '@mui/icons-material/Edit';
  import DeleteIcon from '@mui/icons-material/Delete';
  import { useDispatch } from "react-redux";
  import { deleteTodo, editTodo, markCompleteTodo } from "../redux/features/todos/todoSlice";
  import CheckIcon from '@mui/icons-material/Check';

  const TodoItem = ({ todo }) => {

    const [ isEditing, setIsEditing] = useState(false);
    const [ editTodoText, setEditTodoText ] = useState(todo.todo);
    const [ editTodoId, setEditTodoId ] = useState('');
    const dispatch = useDispatch();

    const handleDeleteTodo = ( id ) => {
      dispatch(deleteTodo(id));
    }

    const handleCompleteTodo = ( id ) => {
      dispatch(markCompleteTodo(id)); 
    }

    const handleEditTodo = ( id ) => {
        setEditTodoId(id);
        setIsEditing(!isEditing) ; 
    }

    const handleEditSaveTodo = ( ) => {
        setIsEditing(false);
        dispatch(editTodo({ editTodoId, editTodoText }))
    }

    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
        p={2}
        borderRadius="4px"
        boxShadow={3}
      >
        <Checkbox
          checked={todo.completed}
          onClick={() =>handleCompleteTodo(todo.id)}
        />
        { isEditing ?
        (
          <TextField
          value={editTodoText} 
          onChange={(e) => setEditTodoText(e.target.value)} 
          fullWidth
          variant="outlined"
          size="small"
          />
        )
        :
        (
          <div className="text-gray-950 font-medium">
          <Typography 
          variant="body1" 
          flexGrow={1} 
          ml={2}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          className="text-2xl"
          >
            {todo.todo}
          </Typography>
          </div>
        )
        }

        <Box display="flex" alignItems="center">

            {
              isEditing 
              ?
              ( 
              <IconButton 
                color="primary"
                onClick={handleEditSaveTodo}>
                  <CheckIcon />
              </IconButton>
              )
              :
              (
                <IconButton 
                color="primary"
                onClick={() => {handleEditTodo(todo.id)}}>
                  <EditIcon />
                  </IconButton>
                )
            }
            
          
          <IconButton 
          color="error" 
          ml={1}
          onClick={() =>handleDeleteTodo(todo.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  export default TodoItem;
