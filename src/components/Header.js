import React, { useState } from 'react';
import { AppBar, Toolbar, Container, Box, IconButton, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../images/sepsislogo.png';  // Asegúrate de que la ruta es correcta

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
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/timeline">
          <ListItemText primary="Timeline" />
        </ListItem>
        <ListItem button component={Link} to="/testimonials">
          <ListItemText primary="Testimonials" />
        </ListItem>
        <ListItem button component={Link} to="/booking">
          <ListItemText primary="Booking" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" color="inherit" sx={{ boxShadow: 3 }}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center', minHeight: { xs: '150px', md: '150px' } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ display: { md: 'none' }, position: 'absolute', left: '10px' }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              position: { xs: 'absolute', md: 'static' },
              left: { xs: '50%', md: '0' },
              transform: { xs: 'translateX(-50%)', md: 'none' }
            }}
          >
            <img src={logo} alt="Logo" style={{ height: 150 }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
            <Button className="header-link" component={Link} to="/education">Education</Button>
            <Button className="header-link" component={Link} to="/self-assessment">Self Assessment</Button>
            <Button className="header-link" component={Link} to="/testimonials">Testimonials</Button>
            <Button className="header-link" component={Link} to="/contact">Contact</Button>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
