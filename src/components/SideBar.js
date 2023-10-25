import { Box, Typography, Stack } from "@mui/material";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

const SideBar = () => {
  return (
    <Box m={1} sx={{ width: "60px" }} position="fixed">
      <Stack
        p={2}
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "#f2f2f2",
            cursor: "pointer",
            borderRadius: "5px",
          },
        }}
      >
        <HomeIcon fontSize="small" />
        <Typography variant="subtitle2" fontSize="10px">
          Home
        </Typography>
      </Stack>
      <Stack
        p={2}
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "#f2f2f2",
            cursor: "pointer",
            borderRadius: "5px",
          },
        }}
      >
        <SlowMotionVideoIcon fontSize="small" />
        <Typography variant="subtitle2" fontSize="10px">
          Shorts
        </Typography>
      </Stack>
      <Stack
        p={2}
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "#f2f2f2",
            cursor: "pointer",
            borderRadius: "5px",
          },
        }}
      >
        <SubscriptionsIcon fontSize="small" />
        <Typography variant="subtitle2" fontSize="10px">
          Subscription
        </Typography>
      </Stack>
      <Stack
        p={2}
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "#f2f2f2",
            cursor: "pointer",
            borderRadius: "5px",
          },
        }}
      >
        <VideoLibraryIcon fontSize="small" />
        <Typography variant="subtitle2" fontSize="10px">
          Library
        </Typography>
      </Stack>
    </Box>
  );
};

export default SideBar;
