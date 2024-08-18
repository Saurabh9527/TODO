import React from "react";
import Title from "./components/Title.js";
import NewTodoInput from "./components/NewTodoInput.js";
import TodoList from "./components/TodoList.js";
import useFetchTodos from "./hooks/useFetchTodos.js";
import { Box, Paper, Container } from "@mui/material";

const App = () => {
  useFetchTodos();

  return (
    <div>
      <Title />
      <Container maxWidth="lg"  
      sx={{
         height: '100vh',
         backgroundColor: '#C9CAE9' 
         }}>
        <Box 
          sx={{ 
            mt: { xs: 5, md: 7 }, 
            mx: { xs: 2, md: 4 } 
          }}
        >
          <Paper 
            elevation={3} 
            sx={{
              p: 2, 
              borderRadius: 4,
            }}
          >
            <NewTodoInput />
            <TodoList />
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default App;
