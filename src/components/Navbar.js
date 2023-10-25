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

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import React, { useEffect, useState } from "react";
import DrawerYtb from "./DrawerYtb";
import { useNavigate } from "react-router-dom";





function Navbar() {
  const startListening =()=> SpeechRecognition.startListening({language:'en-IN' })
  const { transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();
   
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  useEffect(()=>{
    setSearchValue(transcript)
  },[transcript])
  const searchResult = () => {
    navigate(`/search/${searchValue}}`);
    setSearchValue("");
  };
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* left of navbar start */}
          <Stack direction="row">
            <IconButton
              size="medium"
              edge="start"
              sx={{ minWidth: "55px" }}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <IconButton
              sx={{ "&:hover": { backgroundColor: "white" } }}
              onClick={() => navigate("/")}
            >
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
                sx={{ width: focused ? "450px" : "400px" }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    searchResult();
                  }
                }}
                placeholder="Search"
                onFocus={onFocus}
                onBlur={onBlur}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{ display: focused ? "flex" : "none" }}
                    >
                      <SearchIcon fontSize="medium" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{ cursor: "pointer" }}
                      onClick={searchResult}
                    >
                      <SearchIcon fontSize="medium" />
                    </InputAdornment>
                  ),
                  style: {
                    borderRadius: "40px",
                    height: "40px",
                  },
                }}
              />
              {/* <Button onClick={searchResult}>Search</Button> */}
            </Box>
            <IconButton sx={{ width: "40px",height:'40px',borderRadius:'50%' }}>
              <MicIcon fontSize="medium" onClick={startListening} />
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
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <DrawerYtb open={open} setOpen={setOpen} />
      </Drawer>
    </Box>
  );
}

export default Navbar;
