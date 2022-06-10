import instance from "../axiosClient";
const getMovieTheater = {
     getAll(){
          const url = `movie/upcoming?language=en-US&page=1`
          return instance.get(url)
     }
}
export default getMovieTheater;