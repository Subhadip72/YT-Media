import axios from "axios";

const baseUrl = "https://youtube-v31.p.rapidapi.com";
const Key = import.meta.env.VITE_API_KEY;

const options = {
  method: "GET",
  url: baseUrl,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": Key,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const getMovies = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  return data;
};
