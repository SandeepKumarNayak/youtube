import { Box, CardMedia, Stack } from '@mui/material'
import React from 'react';
import SideBar from './SideBar';

function ChannelDetails() {
  return (
    <Stack direction="row" width="100%" >
      <SideBar />
      <Box width='100%'  height ='1000px' position='relative' top='70px' left='80px' sx={{}}>
         <CardMedia component='img' width='100%' height='220px' sx={{backgroundAttachment:'fixed'}} image="https://cdn.pixabay.com/photo/2016/03/27/18/52/flower-1283602_1280.jpg" />
      </Box>
      {/* <VIdeos videos={videos} /> */}
    </Stack>
  )
}

export default ChannelDetails
