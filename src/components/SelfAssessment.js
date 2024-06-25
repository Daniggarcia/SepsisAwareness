import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const SelfAssessment = () => {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            Self Assessment
          </Typography>
          <Typography variant="body1" paragraph>
            This is the self-assessment page. Answer the following questions to evaluate your risk.
          </Typography>
          <form>
            <TextField label="Question 1" fullWidth margin="normal" />
            <TextField label="Question 2" fullWidth margin="normal" />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SelfAssessment;
