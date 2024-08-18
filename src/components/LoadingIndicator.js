
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingIndicator = () => {
  return (
    <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        height: '100vh',
        }}>
      <CircularProgress />
    </Box>
  )
}

export default LoadingIndicator
