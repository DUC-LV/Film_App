import React, { useEffect, useState } from "react"; 
import { useRouter } from "next/router";
import getSearchMovieByName from "../../src/service/getSearchMovieByName";
const movies = () => {
    const router = useRouter()
    const {
        query: { query },
    } = router
    const [dataMovie, setDataMovie] = useState<any[]>([]);
    const [listMovie, setListMovie] = useState<any>([]);
    useEffect(() => {
        if(query){
            getSearchMovieByName(query)
                .then(res => {
                    console.log(res.data)
                    setDataMovie(res.data.results)
                    setListMovie(res.data.results.slice(1))
                })
        }
    },[query])
    return(
        <div className = "container">
            <div className = "container-left" >
                <img  src = {`https://image.tmdb.org/t/p/w500` + dataMovie?.[0]?.backdrop_path} className = "img"/>
                <br></br>
                <br></br>
                <br></br>
                <button className="button1">Xem Phim</button>
                <button className="button2">Tải Phim</button>
            </div>
            <div className = "container-right">
                <h3 className = "nameFilm">Tên Phim: {dataMovie?.[0]?.original_title}</h3>
                <h3 className = "country">Quốc Gia: {dataMovie?.[0]?.original_language}</h3>
                <h3 className = "review">Tóm tắt: {dataMovie?.[0]?.overview}</h3>
                <h3 className = "mark">Điểm: {dataMovie?.[0]?.vote_average}</h3>
                <h3 className = "date">Ngày Chiếu: {dataMovie?.[0]?.release_date}</h3>
                <h3 className = "view">View: {dataMovie?.[0]?.vote_count}</h3>
            </div>
            {listMovie.map((item:any, index:any) => {
                return(
                    <div className = "body" key={index}>
                        <div className = "container-lefts" >
                            <img  src = {`https://image.tmdb.org/t/p/w500` + item?.backdrop_path} className = "imgs"/>
                            <br></br>
                            <br></br>
                            <br></br>
                            <button className="button1s">Xem Phim</button>
                            <button className="button2s">Tải Phim</button>
                        </div>
                        <div className = "container-rights">
                            <h3 className = "nameFilms">Tên Phim: {dataMovie?.[0]?.original_title}</h3>
                            <h3 className = "countrys">Quốc Gia: {dataMovie?.[0]?.original_language}</h3>
                            <h3 className = "reviews">Tóm tắt: {dataMovie?.[0]?.overview}</h3>
                            <h3 className = "marks">Điểm: {dataMovie?.[0]?.vote_average}</h3>
                            <h3 className = "dates">Ngày Chiếu: {dataMovie?.[0]?.release_date}</h3>
                            <h3 className = "views">View: {dataMovie?.[0]?.vote_count}</h3>
                        </div>
                    </div>
                )
            })}
            <style jsx>{`
                .container-left,.container-right{
                    display:inline-block;
                }
                .img,.imgs{
                    border-radius:6px;
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
                    position: relative;
                    bottom:25px;
                }
                .button1{
                    margin-left:160px;
                }
                .button2{
                    margin-left:30px;
                }
                .body{
                    position: relative;
                    bottom:280px;
                }
                .container-lefts{
                    position: relative;
                    left:290px;
                }
                .container-rights{
                    position: relative;
                    left:330px;
                    bottom:35px;
                    font-size:18px;
                }
                .nameFilms,.countrys,.marks,.dates,.views,.reviews{
                    color:white;
                }
                .reviews{
                    width: 500px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 25px;
                    -webkit-line-clamp: 3;
                    height: 75px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                }
                .container-lefts,.container-rights{
                    display:inline-block;
                }
                .button1s,.button2s{
                    height:30px;
                    width:100px;
                    border:none;
                    border-radius:6px;
                    cursor: pointer;
                    outline:none;
                    position: relative;
                    bottom:25px;
                }
                .button1s{
                    margin-left:160px;
                }
                .button2s{
                    margin-left:30px;
                }
            `}</style>
        </div>
    );
}
export default movies;