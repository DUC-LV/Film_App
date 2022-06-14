import axios from "axios";

const getCartoonMovie = () => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=beb36572ce908c61fa2c0585f6e2ced8&language=en-US&page=1&include_adult=false&query=carto`)
}
export default getCartoonMovie;