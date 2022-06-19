import React from "react";
import { useState, useEffect } from "react";
import LoadingMore from "../src/containers/LoadingMore";
import Slide from "../src/containers/Slide";
import SlideShow from "../src/containers/SlideShow";
import getCartoonMovie from "../src/service/getCartoonMovie";
import getMovieTheater from "../src/service/getMovieTheater";
import getNowPlaying from "../src/service/getNowPlaying";
import getOtherMovie from "../src/service/getOtherMovie";
import getPopularMovie from "../src/service/getPopularMovie";
import getTopMovie from "../src/service/getTopMovie";
import getLoadingMovieTheater from "../src/service/LoadingMore/getLoadingMovieTheater";
export const HomePage = () => {
     const [dataTopMovie, setDataTopMovie] = useState<any>();
     const [dataMovieTheaters, getDataMovieTheaters] = useState<any>();
     const [dataPopularMovie, getDataPopularMovie] = useState<any>();
     const [dataCartoonMovie, getDataCartoonMovie] = useState<any>();
     const [dataOtherMovie, getDataOtherMovie] = useState<any>();
     const [dataNowPlaying, getDataNowPlaying] = useState<any>();
     const [dataLoadingMovieTheater, setDataLoadingMovieTheater] = useState<any>()
     useEffect(() => {
          getPopularMovie()
               .then(res => {
                    getDataPopularMovie(res.data.results)
               })
          getTopMovie()
               .then(res => {
                    setDataTopMovie(res.data.results.slice(1,20))
               })
          getMovieTheater.getAll().then(response => {
               getDataMovieTheaters(response.data.results)
               // getDataMovieTheaters(response.data.results)
               // console.log(response.data)
          })
          getCartoonMovie()
               .then(res => {
                    getDataCartoonMovie(res.data.results)
               })
          getOtherMovie()
               .then(res => {
                    getDataOtherMovie(res.data.results)
               })
          getNowPlaying()
               .then(res => {
                    getDataNowPlaying(res.data.results)
               })
          
     },[])
     return(
          <div>
               <Slide
                    dataSlide = {dataTopMovie?.map((item:any) => {
                         return {
                              image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                              id:item.id,
                              filmName:item.original_title,
                         }
                    })}
               />
               <SlideShow 
                    dataSlideShow = {dataNowPlaying?.map((item:any) => {
                         return {
                              image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                              filmName:item.original_title,
                              id:item.id
                         }
                    })}
                    title = "Trực Tiếp"
                    post = "/"
                    
               />
               <SlideShow 
                    dataSlideShow = {dataMovieTheaters?.map((item:any) => {
                         return {
                              image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                              filmName:item.original_title,
                              id:item.id
                         }
                    })}
                    title = "Phim Chiếu Rạp"
                    post = "/movie-theaters"
                    
               />
               <SlideShow 
                    dataSlideShow = {dataPopularMovie?.map((item:any) => {
                         return {
                              image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                              filmName:item.original_title,
                              id:item.id
                         }
                    })}
                    title = "Phim Thịnh Hành"
                    post = "/"
               />
               <SlideShow 
                    dataSlideShow = {dataCartoonMovie?.map((item:any) => {
                         return {
                              image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                              filmName:item.original_title,
                              id:item.id
                         }
                    })}
                    title = "Phim Hoạt Hình"
                    post = "/cartoon"
               />
               <SlideShow 
                    dataSlideShow = {dataOtherMovie?.map((item:any) => {
                         return {
                              image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                              filmName:item.original_title,
                              id:item.id
                         }
                    })}
                    title = "Phim Khác"
                    post = "/"
               />
               {/* <LoadingMore
                    // dataLoading = {dataLoadingMovieTheater?.map((item:any) => {
                    //      return {
                    //           image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                    //           filmName:item.original_title,
                    //           id:item.id
                    //      }
                    // })}
                    // title = ""
                    // post = ""
               /> */}
               <LoadingMore />
          </div>
     );
}
export default HomePage;