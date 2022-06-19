import axios from "axios";

// const getLoadingMovieTheater = async (page:any):any => {
//     const res =await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=beb36572ce908c61fa2c0585f6e2ced8&language=en-US&page=${page}`)
//         .then(res => {
//             return res.data.results
//         })
//     return res
// }
function getLoadingMovieTheater(page:any) {
    const res = axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=beb36572ce908c61fa2c0585f6e2ced8&language=en-US&page=${page}`)
    return res
}
export default getLoadingMovieTheater;