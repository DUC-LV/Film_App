import axios from "axios";

const getLoading = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=beb36572ce908c61fa2c0585f6e2ced8&language=en-US&page=3`)
}
export default getLoading;