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
                    <h3 className="nameFilm">{filmInformation?.original_title}</h3>
                    <p className="review">Review: {filmInformation?.overview}</p>
                    <p className="date">Ngày Phát Hành:{filmInformation?.release_date}</p>
                    <p className="date">Nhà Phát Hành:{filmInformation?.production_companies?.[0]?.name}</p>
                    <img  src = {`https://image.tmdb.org/t/p/w500` + filmInformation?.production_companies?.[0]?.logo_path} className = "logo"/>
                    <p className="date">Quốc Gia:{filmInformation?.production_countries?.[0]?.name}</p>
                </div>
                <style jsx>{`
                    .img{
                        position:relative;
                        right:380px;
                        top:30px;
                        border-radius:6px;
                    }
                    .nameFilm,.date,.review{
                        color:grey;
                        text-align:center;
                    }
                    .button1{
                        margin-left:650px;
                    }
                    .button2{
                        margin-left:10px;
                    }
                    .button1,.button2{
                        height:30px;
                        width:100px;
                        border:none;
                        border-radius:6px;
                        cursor:pointer;
                        outline:none;
                    }
                    .logo{
                        height:300px;
                        width:300px;
                        margin-left:610px;
                        border-radius:10px;
                    }
            `}</style>
        </div>
    );
}
export default name;