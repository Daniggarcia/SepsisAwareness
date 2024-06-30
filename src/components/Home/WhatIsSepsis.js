import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const WhatIsSepsis = () => {
    return (
        <section className='whatissepsis'>
            <Box className="flexible-content-full-width-content page-content">
                <Container className="page-content-wrap" sx={{ background: '#fff', boxShadow: '0px 0px 29.44px 2.56px rgba(1, 1, 1, 0.5)'}}>
                    <Box className="section-title">
                        <Typography variant="h4">¿Qué es la Sepsis?</Typography>
                    </Box>
                    <Box className="section-content" sx={{border: '2px solid #fff' }}>
                        <Typography className='p' variant="body1">
                        La sepsis, anteriormente conocida como "envenenamiento de la sangre," es una emergencia médica que pone en peligro la vida y ocurre cuando la respuesta del cuerpo a una infección daña órganos vitales y, a menudo, causa la muerte. Aprende más sobre los síntomas de la sepsis, que mata a más de 17,000 personas cada año en España.                        </Typography>
                    </Box>
                </Container>
            </Box>
        </section>
    );
};

export default WhatIsSepsis;
