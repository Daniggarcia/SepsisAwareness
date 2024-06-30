import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const WhatIsSepsis = () => {
    return (
        <section class='whatissepsis'>
            <Box className="flexible-content-full-width-content page-content">
                <Container className="page-content-wrap" sx={{ background: '#fff', boxShadow: '0px 0px 29.44px 2.56px rgba(1, 1, 1, 0.5)'}}>
                    <Box className="section-title" sx={{ mb: 2 }}>
                        <Typography variant="h3">What is Sepsis?</Typography>
                    </Box>
                    <Box className="section-content" sx={{ p: 3, border: '2px solid #fff' }}>
                        <Typography variant="body1">
                            Sepsis, which was often called “blood poisoning,” is a life-threatening emergency that happens when your body’s response to an infection damages vital organs and, often, causes death. Learn more about the symptoms of sepsis, which kills 350,000 adults each year in the United States.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </section>
    );
};

export default WhatIsSepsis;
