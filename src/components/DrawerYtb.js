import { Stack, IconButton, Typography, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import HistoryIcon from "@mui/icons-material/History";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import React from "react";
import { useNavigate } from "react-router-dom";

const DrawerYtb = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack width="250px" direction="column" px={2} py={1} >
      <Stack direction="row" p={1}>
        <IconButton
          size="large"
          edge="start"
          sx={{ minWidth: "55px" }}
          onClick={handleClose}
        >
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton
          sx={{ "&:hover": { backgroundColor: "white" } }}
          onClick={handleClose}
        >
          <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
          <Typography variant="h5" sx={{ color: "black" }} onClick={()=> navigate("/")}>
            YouTube
            <sup style={{ fontSize: "10px" }}>IN</sup>
          </Typography>
        </IconButton>
      </Stack>

      <Stack
        direction="row"
        p={1}
        spacing={1}
        sx={{
          display: "flex",
          "&:hover": {
            backgroundColor: "#f2f2f2",
            cursor: "pointer",
          },
          alignItems: "center",
          borderRadius: "10px",
          
        }}
        onClick={handleClose}
      >
        <HomeIcon sx={{ marginLeft: "3px", marginRight: "20px" }} />
        {/* {homeLink.icon} */}
        <Typography variant="body2" onClick={()=> navigate("/")}>Home</Typography>
      </Stack>

      <Stack
        direction="row"
        p={1}
        spacing={1}
        sx={{
          display: "flex",
          "&:hover": {
            backgroundColor: "#f2f2f2",
            cursor: "pointer",
          },
          alignItems: "center",
          borderRadius: "10px",
        }}
        onClick={handleClose}
      >
        <SportsCricketIcon sx={{ marginLeft: "3px", marginRight: "20px" }} />
        {/* {homeLink.icon} */}
        <Typography variant="body2" onClick={()=> navigate("/")}>Cricket</Typography>
      </Stack>
      <Stack
        direction="row"
        p={1}
        spacing={1}
        sx={{
          display: "flex",
          "&:hover": {
            backgroundColor: "#f2f2f2",
            cursor: "pointer",
          },
          alignItems: "center",
          borderRadius: "10px",
        }}
        onClick={handleClose}
      >
        <TrendingUpIcon sx={{ marginLeft: "3px", marginRight: "20px" }} />
        {/* {homeLink.icon} */}
        <Typography variant="body2" onClick={()=> navigate("/")}>Trending</Typography>
      </Stack>
      <Stack
        direction="row"
        p={1}
        spacing={1}
        sx={{
          display: "flex",
          "&:hover": {
            backgroundColor: "#f2f2f2",
            cursor: "pointer",
          },
          alignItems: "center",
          borderRadius: "10px",
        }}
        onClick={handleClose}
      >
        <HistoryIcon sx={{ marginLeft: "3px", marginRight: "20px" }} />
        {/* {homeLink.icon} */}
        <Typography variant="body2" onClick={()=> navigate("/")}>History</Typography>
      </Stack>
      <Stack
        direction="row"
        p={1}
        spacing={1}
        sx={{
          display: "flex",
          "&:hover": {
            backgroundColor: "#f2f2f2",
            cursor: "pointer",
          },
          alignItems: "center",
          borderRadius: "10px",
        }}
        onClick={handleClose}
      >
        <SlowMotionVideoIcon sx={{ marginLeft: "3px", marginRight: "20px" }} />
        {/* {homeLink.icon} */}
        <Typography variant="body2" onClick={()=> navigate("/")}>Shorts</Typography>
      </Stack>
      <Stack
        direction="row"
        p={1}
        spacing={1}
        sx={{
          display: "flex",
          "&:hover": {
            backgroundColor: "#f2f2f2",
            cursor: "pointer",
          },
          alignItems: "center",
          borderRadius: "10px",
        }}
        onClick={handleClose}
      >
        <VideoLibraryIcon sx={{ marginLeft: "3px", marginRight: "20px" }} />
        {/* {homeLink.icon} */}
        <Typography variant="body2" onClick={()=> navigate("/")}>Library</Typography>
      </Stack>
      <Stack
        direction="row"
        p={1}
        spacing={1}
        sx={{
          display: "flex",
          "&:hover": {
            backgroundColor: "#f2f2f2",
            cursor: "pointer",
          },
          alignItems: "center",
          borderRadius: "10px",
        }}
        onClick={handleClose}
      >
        <SubscriptionsIcon sx={{ marginLeft: "3px", marginRight: "20px" }} />
        {/* {homeLink.icon} */}
        <Typography variant="body2" onClick={()=> navigate("/")}>Subscription</Typography>
      </Stack>

      <Divider />
    </Stack>
  );
};

export default DrawerYtb;
