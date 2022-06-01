import React, { useEffect, useState } from "react"; 
import { useRouter } from "next/router";
import getSearchMovieByName from "../../src/service/getSearchMovieByName";
const movies = () => {
    const router = useRouter()
    const {
        query: { query },
    } = router
    const [dataMovie, setDataMovie] = useState<any[]>([]);
    useEffect(() => {
        if(query){
            getSearchMovieByName(query)
                .then(res => {
                    console.log(res.data)
                    setDataMovie(res.data.results)
                })
        }
    },[query])
    return(
        <div className = "container">
            {dataMovie.map((item:any,index:any) => {
                return(
                        // <div className = "body">
                        //     <div className = "container-left">
                        //         <img  src = {`https://image.tmdb.org/t/p/w500` + item.backdrop_path} className = "img"/>
                        //         <br></br>
                        //         <br></br>
                        //         <br></br>
                        //         <button className="button1">Xem Phim</button>
                        //         <button className="button2">Tải Phim</button>
                        //     </div>
                        //     <div className = "container-right">
                        //         <h3 className = "nameFilm">Tên Phim: {item.original_title}</h3>
                        //         <h3 className = "country">Quốc Gia: {item.original_language}</h3>
                        //         <h3 className = "review">Tóm tắt: {item.overview}</h3>
                        //         <h3 className = "mark">Điểm: {item.vote_average}</h3>
                        //         <h3 className = "date">Ngày Chiếu: {item.release_date}</h3>
                        //         <h3 className = "view">View: {item.vote_count}</h3>
                        //     </div>
                        //     <style jsx>{`
                        //         .body{
                        //             margin-top:30px;
                        //         }
                        //         .container-left,.container-right{
                        //             display:inline-block;
                        //         }
                        //         .container-left{
                        //             position: relative;
                        //             right:600px;
                        //             top:30px;
                        //         }
                        //         .container-right{
                        //             position: relative;
                        //             left:830px;
                        //             bottom:350px;
                        //             font-size:18px;
                        //         }
                        //         .nameFilm,.country,.mark,.date,.view,.review{
                        //             color:white;
                        //         }
                        //         .review{
                        //             width: 500px;
                        //             overflow: hidden;
                        //             text-overflow: ellipsis;
                        //             line-height: 25px;
                        //             -webkit-line-clamp: 3;
                        //             height: 75px;
                        //             display: -webkit-box;
                        //             -webkit-box-orient: vertical;
                        //         }
                        //         .button1,.button2{
                        //             height:30px;
                        //             width:100px;
                        //             border:none;
                        //             border-radius:6px;
                        //             cursor: pointer;
                        //             outline:none;
                        //         }
                        //         .button1{
                        //             margin-left:170px;
                        //         }
                        //         .button2{
                        //             margin-left:30px;
                        //         }
                        //     `}</style>
                        // </div>
                        
                    
                )
            })}
        </div>
    );
}
export default movies;