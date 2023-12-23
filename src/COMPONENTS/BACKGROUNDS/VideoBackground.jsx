import React from 'react';
import { Box } from '@mui/material';

const VideoBackground = ({ src, children }) => {
  return (
    <Box className='video-background' >
      <video autoPlay loop muted>
        <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      <Box className='content' sx={{padding:'20px'}}>
        {children}
      </Box>
    </Box>
  );
};

export default VideoBackground;
