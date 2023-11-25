import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

function VideoCard({ video,sideVideo }) {
 
  console.log(video);
  return (
    <Stack data-aos="zoom-in-up" width='100%'>
      <Card sx={{boxShadow:'none', display:'flex',flexDirection: sideVideo ? 'row': 'column',alignItems:'center'}}>
        <Link
          underline="none"
          sx={{ cursor: "pointer" }}
          href={`/video/${video?.video?.videoId}`}
        >
          <CardMedia
            component="img"
            image={video?.video?.thumbnails[0]?.url}
            alt="img"
            sx={{ height: sideVideo ? '100px':'200px',width:sideVideo ? '170px':'auto',transition:'all 0.2s ease', '&:hover': {
              borderRadius:'0px',
           } }}
          />
        </Link>
        <CardContent width='100%' sx={{display:'flex',justifyContent:'space-between'}}>
          {
            !sideVideo &&
          <Link underline="none"
          href={`/channel/${video?.video?.author?.channelId}`} sx={{mr:'10px', cursor:'pointer' }}>
            <Tooltip title={video?.video?.author?.title}>

            <CardMedia component="img" image= {video?.video?.author?.avatar[0]?.url} sx={{width:'40px',height:'40px',borderRadius:'50%' }} alt="channel" />
            </Tooltip>
          </Link>
          }
        <Link
          underline="none"
          sx={{ cursor: "pointer" }}
          href={`/video/${video?.video?.videoId}`}
        >
          <Typography
            fontSize="small"
            fontWeight="bold"
            color="black"
            variant="h6"
          >
            {video?.video?.title?.substring(0,50)}
          </Typography>
          <Typography fontSize="small" color="gray" variant="h6">
            {video?.video?.author?.title}
          </Typography>
          <Typography fontSize="small" color="gray" variant="h6">
            <Typography variant="span">
              {video?.video?.stats?.views} views{" "}
            </Typography>
            <Typography variant="span">
              {video?.video?.publishedTimeText}
            </Typography>
          </Typography>
        </Link>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default VideoCard;
