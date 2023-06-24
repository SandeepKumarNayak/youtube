import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import React, { useState } from "react";
import DrawerYtb from "./DrawerYtb";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* left of navbar start */}
          <Stack direction="row">
            <IconButton size="medium" edge="start" sx={{ minWidth: "55px" }} onClick={()=> setOpen(!open)}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <IconButton sx={{ "&:hover": { backgroundColor: "white" } }}>
              <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
              <Typography variant="h5" sx={{ color: "black" }}>
                YouTube
                <sup style={{ fontSize: "10px" }}>IN</sup>
              </Typography>
            </IconButton>
          </Stack>
          {/* left content of navbar ends */}

          {/* middle content of navbar starts */}
          <Stack direction="row" spacing={1}>
            <Box sx={{ color: "white" }}>
              <TextField
                sx={{ width: "400px" }}
                
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="medium" />
                    </InputAdornment>
                  ),
                  style:{
                    borderRadius:'40px',
                    height:'40px'
                  }
                }}
              />
            </Box>
            <IconButton sx={{ minWidth: "55px" }}>
              <MicIcon fontSize="medium" />
            </IconButton>
          </Stack>
          {/* middle content ends */}

          <Stack spacing={2} direction="row">
            <IconButton sx={{ minWidth: "55px" }}>
              <VideoCallIcon fontSize="medium" />
            </IconButton>
            <IconButton sx={{ minWidth: "55px" }}>
              <NotificationsNoneIcon fontSize="medium" />
            </IconButton>
            <IconButton sx={{ minWidth: "40px" }}>
              <Avatar>S</Avatar>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={()=> setOpen(false)}>
        <DrawerYtb open={open} setOpen = {setOpen} />
      </Drawer>
    </Box>
  );
}

export default Navbar;
