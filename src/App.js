import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoDetails from "./components/VideoDetails.js";
import SearchData from "./components/SearchData.js";
import ChannelDetails from "./components/ChannelDetails.js";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
 

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Navbar  />
      {/* <h2>{process.env.PUBLIC_URL}</h2> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/search/:key" element={<SearchData />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
