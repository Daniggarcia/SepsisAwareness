import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Testimonials = () => {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            Testimonials
          </Typography>
          <Typography variant="body1" paragraph>
            This is the testimonials page. Read stories from people who have experienced sepsis.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonials;
