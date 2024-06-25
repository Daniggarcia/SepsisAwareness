import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../images/sepsislogo.png';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/education">
          <ListItemText primary="Education" />
        </ListItem>
        <ListItem button component={Link} to="/self-assessment">
          <ListItemText primary="Self Assessment" />
        </ListItem>
        <ListItem button component={Link} to="/testimonials">
          <ListItemText primary="Testimonials" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Box component="img" src={logo} alt="Sepsis Awareness Logo" sx={{ height: 200, marginRight: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Sepsis Awareness
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/education">Education</Button>
            <Button color="inherit" component={Link} to="/self-assessment">Self Assessment</Button>
            <Button color="inherit" component={Link} to="/testimonials">Testimonials</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
