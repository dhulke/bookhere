import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Hero = ({ handleOpenPropertyDialog }) => {
  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 6, pb: 6 }}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Book here!
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          This is your one-page app for booking the best made up properties out
          there. All you need to do is create a property and book it a couple of
          times to see that you <b>cannot</b> book overlapping dates.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            onClick={() => handleOpenPropertyDialog()}
          >
            Create new property
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
