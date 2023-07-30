import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/lg1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '65px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="20px" textAlign="center" pb="40px">Made with ❤️ by Parth Jadhav</Typography>
  </Box>
);

export default Footer;
