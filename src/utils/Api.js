import axios from "axios";

const options = {
  
  params: {hl: 'en', gl: 'IN',maxlimit:'100'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

const BASE_URL = "https://youtube138.p.rapidapi.com";

export const fetchHomeData =async (url) =>  {
  const {data} = await axios.get(`${BASE_URL}/${url}`,options);
  return data;
}

export const fetchSearchData =async (key) => {
  options.params.q =  key ;
  options.url = 'https://youtube138.p.rapidapi.com/search/';
  const {data} = await axios.request(options);
  return data;
}



export const fetchVideoData = async(id) => {
  options.params.id = id;
  options.url = 'https://youtube138.p.rapidapi.com/video/details/';
  const {data} = await axios.request(options);
  return data;
}

export const fetchVideoRelatedData = async(id) => {
  options.params.id = id;
  options.url = 'https://youtube138.p.rapidapi.com/video/related-contents/';
  const {data} = await axios.request(options);
  return data;
}

 