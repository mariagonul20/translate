import axios from "axios";

const api = axios.create({
  baseURL: "https://deep-translate1.p.rapidapi.com/language/translate/v2",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});

export default api;
