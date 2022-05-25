import React from "react";
import { useState, useEffect } from "react";
import SliderOneItem from "../src/components/container/homepage/SliderOneItem";
import getMovieTheaters from "../src/service/getMovieTheaters";
import getPopularMovie from "../src/service/getPopularMovie";
import getTopMovie from "../src/service/getTopMovie";
export const HomePage = () => {
     const [dataTopMovie, setDataTopMovie] = useState<any>();
     useEffect(() => {
          getPopularMovie()
               .then(res => {
               })
          getTopMovie()
               .then(res => {
                    console.log(res.data)
                    setDataTopMovie(res.data.results.slice(1,7))
               })
          getMovieTheaters()
               .then(res => {
               })
     },[])
     return(
          <div>
               <SliderOneItem
                    dataSliderTop = {dataTopMovie?.map((item:any) => {
                         return {
                              image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                              title:item.title
                         }
                    })}
               />
          </div>
     );
}
export default HomePage;