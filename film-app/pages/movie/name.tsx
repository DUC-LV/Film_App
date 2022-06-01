import React, { useEffect, useState } from "react";    
import { useRouter } from "next/router"
import getDetail from "../../src/service/getDetail";
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
            `}</style>
        </div>
    );
}
export default name;