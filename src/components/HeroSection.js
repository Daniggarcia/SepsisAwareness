import React from 'react';
import { Box, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const videos = [
    {
      src: `slider/SepsisDay.mp4`,
      alt: 'Sepsis Day Video',
      onClick: () => navigate('/testimonials')
    }
  ];

  return (
    <section className="hero" id="hero">
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Carousel indicators={false} interval={3000}>
            {videos.map((video, index) => (
              <Box
                key={index}
                component="video"
                src={video.src}
                alt={video.alt}
                autoPlay
                loop
                muted
                onClick={video.onClick}
                sx={{ width: '100%', height: '80vh', objectFit: 'cover' }}
              />
            ))}
          </Carousel>

          <Box
            className="heroText d-flex flex-column justify-content-center"
            sx={{
              textAlign: 'center',
              color: 'white',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              padding: '20px'
            }}
          >
            {/* Texto de la hero section */}
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default HeroSection;
