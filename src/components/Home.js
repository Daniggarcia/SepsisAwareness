import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Sepsis Awareness
          </Typography>
          <Typography variant="body1" paragraph>
            This is the home page. Learn about sepsis, its symptoms, and how to prevent it.
          </Typography>
          <Button variant="contained" color="primary" href="/education">
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
