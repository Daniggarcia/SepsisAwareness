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
        </Grid>
      </Grid>
    </section>
  );
};

export default HeroSection;
