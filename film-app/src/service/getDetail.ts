import axios from "axios";

const getDetail = (id:any) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=beb36572ce908c61fa2c0585f6e2ced8&language=en-US`)
}
export default getDetail;