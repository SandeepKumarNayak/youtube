import React, { useEffect, useState } from 'react'
import { Stack } from '@mui/material';
import SideBar from './SideBar';
import VIdeos from './VIdeos';
import { useParams } from 'react-router-dom';
import { fetchSearchData } from '../utils/Api';
function SearchData() {
    const [videos, setVideos] = useState([]);
    const params = useParams();
    let {key} = params;
    useEffect(()=>{
        fetchSearchData(key).then((data) => {
            const {contents} = data;
            setVideos(contents);
        })
    },[key])
  return (
    <Stack direction='row' width="100%">
    <SideBar/>
    
  <VIdeos videos = {videos} /> 
    
 </Stack>
  )
}

export default SearchData
