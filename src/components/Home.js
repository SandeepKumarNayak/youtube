import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import VIdeos from "./VIdeos";
import { fetchHomeData } from "../utils/Api";

const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchHomeData("home/").then((data) => {
      const { contents } = data;
      setVideos(contents);
    });
  }, []);
  return (
    <Stack direction="row" width="100%" >
      <SideBar />
      <VIdeos videos={videos} />
    </Stack>
  );
};

export default Home;
