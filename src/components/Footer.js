import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        mt: 2, 
        py: 1, 
        backgroundColor: '#f1f1f1', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '64px'
      }}
    >
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2023 Sepsis Awareness. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
