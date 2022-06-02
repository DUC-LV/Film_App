import React, { useEffect, useState } from "react";    
import { useRouter } from "next/router"
import getDetail from "../../src/service/getDetail";
import getCartoonMovie from "../../src/service/getCartoonMovie";
import getMovieTheaters from "../../src/service/getMovieTheaters";
import getNowPlaying from "../../src/service/getNowPlaying";
import getOtherMovie from "../../src/service/getOtherMovie";
import getPopularMovie from "../../src/service/getPopularMovie";
import getTopMovie from "../../src/service/getTopMovie";
import SlideShow from "../../src/containers/SlideShow";
const name = () => {
    const router = useRouter()
    const {
        query: { query },
    } = router
     // console.log(id)
    const [filmInformation, setFilmInformation] = useState<any>({})
        useEffect(() => {
            if(query){
                getDetail(query)
                .then(res => {
                    setFilmInformation(res.data)
                })
            }
        },[query])
     // console.log(filmInformation.backdrop_path)
    const [dataTopMovie, setDataTopMovie] = useState<any>();
    const [dataMovieTheaters, getDataMovieTheaters] = useState<any>();
    const [dataPopularMovie, getDataPopularMovie] = useState<any>();
    const [dataCartoonMovie, getDataCartoonMovie] = useState<any>();
    const [dataOtherMovie, getDataOtherMovie] = useState<any>();
    const [dataNowPlaying, getDataNowPlaying] = useState<any>();
    useEffect(() => {
        getPopularMovie()
                .then(res => {
                    getDataPopularMovie(res.data.results)
                })
        getTopMovie()
                .then(res => {
                    setDataTopMovie(res.data.results.slice(1,20))
                })
        getMovieTheaters()
                .then(res => {
                    getDataMovieTheaters(res.data.results)
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
            <div className="container">
                <div className="container-left">
                    <img  src = {`https://image.tmdb.org/t/p/w500` + filmInformation?.backdrop_path} className = "img"/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button className="button1">Xem Phim</button>
                    <button className="button2">Tải Phim</button>
                </div>
                <div className="container-right">
                    <h3 className = "nameFilm">Tên Phim: {filmInformation.original_title}</h3>
                    <h3 className = "country">Quốc Gia: {filmInformation.original_language}</h3>
                    <h3 className = "review">Tóm tắt: {filmInformation.overview}</h3>
                    <h3 className = "mark">Điểm: {filmInformation.vote_average}</h3>
                    <h3 className = "date">Ngày Chiếu: {filmInformation.release_date}</h3>
                    <h3 className = "view">View: {filmInformation.vote_count}</h3>
                </div>
                <div className = "slide">
                    <h2 className = "title">Phim Khác</h2>
                    <SlideShow 
                        dataSlideShow = {dataNowPlaying?.map((item:any) => {
                            return {
                                image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                                filmName:item.original_title,
                                id:item.id
                            }
                        })}
                        title = ""
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
                        title = ""
                        post = "/MovieTheaters"
                        
                    />
                    <SlideShow 
                        dataSlideShow = {dataPopularMovie?.map((item:any) => {
                            return {
                                image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                                filmName:item.original_title,
                                id:item.id
                            }
                        })}
                        title = ""
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
                        title = ""
                        post = "/Cartoon"
                    />
                    <SlideShow 
                        dataSlideShow = {dataOtherMovie?.map((item:any) => {
                            return {
                                image:`https://image.tmdb.org/t/p/w500`+item.poster_path,
                                filmName:item.original_title,
                                id:item.id
                            }
                        })}
                        title = ""
                        post = "/"
                    />
                </div>
                <style jsx>{`
                    .container-left,.container-right{
                        display:inline-block;
                    }
                    .container-left{
                        position: relative;
                        right:600px;
                        top:30px;
                    }
                    .container-right{
                        position: relative;
                        left:830px;
                        bottom:350px;
                        font-size:18px;
                    }
                    .nameFilm,.country,.mark,.date,.view,.review{
                        color:white;
                    }
                    .review{
                        width: 500px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        line-height: 25px;
                        -webkit-line-clamp: 3;
                        height: 75px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                    }
                    .button1,.button2{
                        height:30px;
                        width:100px;
                        border:none;
                        border-radius:6px;
                        cursor: pointer;
                        outline:none;
                    }
                    .button1{
                        margin-left:170px;
                    }
                    .button2{
                        margin-left:30px;
                    }
                    .title{
                        color:white;
                        position: relative;
                        margin-left:33px;
                        position: relative;
                        top:30px;
                    }
                    .slide{
                        position: relative;
                        bottom:300px;
                    }
            `}</style>
        </div>
    );
}
export default name;