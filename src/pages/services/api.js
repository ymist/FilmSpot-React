import axios from "axios";

//Key: "a65a2379df321bc528f0d3b5c209b2cf";
//Base da Url: https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/now_playing?api_key=a65a2379df321bc528f0d3b5c209b2cf&language=pt-BR

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
});

export default api;
