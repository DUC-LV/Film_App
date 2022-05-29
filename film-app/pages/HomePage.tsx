import React from "react";
import { useState, useEffect } from "react";
import getMovieTheaters from "../src/service/getMovieTheaters";
import getPopularMovie from "../src/service/getPopularMovie";
import getTopMovie from "../src/service/getTopMovie";
import Slide from "../src/containers/Slide";
export const HomePage = () => {
     const [dataTopMovie, setDataTopMovie] = useState<any>();
     useEffect(() => {
          getPopularMovie()
               .then(res => {
               })
          getTopMovie()
               .then(res => {
                    console.log(res.data)
                    setDataTopMovie(res.data.results.slice(0,7))
               })
          getMovieTheaters()
               .then(res => {
               })
     },[])
     return(
          <>
               <Slide
                    dataSliderTop = {dataTopMovie?.map((item:any) => {
                         return {
                              image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                              name:item.title
                         }
                    })
                    
               }
                    title = ""
               />
          </>
     );
}
export default HomePage;