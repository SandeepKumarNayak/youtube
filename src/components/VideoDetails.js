import { Box, Grid } from '@mui/material'
import React, { useEffect,useState } from 'react'
 
import { useParams } from 'react-router-dom'
import { fetchVideoData, fetchVideoRelatedData } from '../utils/Api';
import Video from './Video';

import VideoCard from './VideoCard';


function VideoDetails() {
    const {id} = useParams();
    useEffect(()=>{
        fetchVideoData(id).then((data)=> {
            console.log(data);
        })
    },[id]);

    const [videos, setVideos] = useState([]);
    useEffect(()=>{
      fetchVideoRelatedData(id).then((data) => {
        const {contents} = data;
        setVideos(contents);
      })
    },[id])
  return (
    <Box sx={{position:'relative', top:'100px'}}>
      <Grid container sx={{justifyContent:'center'}} columnGap={6}>
        <Grid sm={6} item>
            <Video id={id} />
        </Grid>
        <Grid  sm={4} item>
           {
            videos && videos.map((video, indx) => {
              return (
                <Box key={indx} >
                  <VideoCard video={video} sideVideo={true} />
                </Box>
              )
            })
           }
        </Grid>
      </Grid>
    </Box>
  )
}

export default VideoDetails
