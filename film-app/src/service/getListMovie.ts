import axios from "axios";

const getListMovie = () => {
     return axios.get(`https://api.themoviedb.org/3/movie/2/recommendations?api_key=beb36572ce908c61fa2c0585f6e2ced8&language=en-US&page=1`)
}
export default getListMovie;