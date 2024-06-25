import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Education = () => {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            Education on Sepsis
          </Typography>
          <Typography variant="body1" paragraph>
            This is the education page. Here you will find articles, videos, and links to resources about sepsis.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Education;
