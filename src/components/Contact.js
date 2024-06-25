import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            This is the contact page. Reach out to us for more information or support.
          </Typography>
          <form>
            <TextField label="Your Name" fullWidth margin="normal" />
            <TextField label="Your Email" fullWidth margin="normal" />
            <TextField label="Your Message" fullWidth margin="normal" multiline rows={4} />
            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
