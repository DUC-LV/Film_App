import React, {useState, useEffect} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { convertSlug } from "../untils";
import getLoadingMovieTheater from "../service/LoadingMore/getLoadingMovieTheater";
// export interface DataLoading {
//     image?:string,
//     filmName?:string
//     id?:number
// }
// interface Data {
//     dataLoading?:DataLoading[]
//     title?:string
//     post?:any
// }
const LoadingMore = () => {
    // const { dataLoading, title, post } = props;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    const router = useRouter()
    const [page, setPage] = useState<any>()
    const [currentPage, setCurrent] = useState(2)
        
        useEffect(() => {
            getLoadingMovieTheater(currentPage)
                .then(res => {
                    setPage( res.data.results)
                })
            setCurrent(currentPage + 1)
        },[])
        
    const fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        
        getLoadingMovieTheater(currentPage)
            .then(res => {
                console.log("haha",res.data.results)
                console.log("page",page)
                if(!page){
                    return 
                }
                setPage([...page,...res.data.results])
            })
    };
    fetchMoreData()
    return(
        <div>
            <InfiniteScroll
                dataLength={1}
                next = {fetchMoreData}
                hasMore = {true}
                loader={<h4 style = {{"color":"white"}}>Loading</h4>}
            >
                <div className="container">
                    <Slider {...settings}>
                            {page?.map((item:any,index:any) => {
                                return (
                                        <div className="movieItem" key={index} onClick = {() => {
                                                router.push({
                                                    pathname: `/movie/name`,
                                                    query:{"":convertSlug(item.filmName),query:item.id}
                                                })
                                                // router.push(`/movie?${item.id}`, `/movie?${item.filmName}`, { shallow: true });
                                        }} >
                                                <img src={`https://image.tmdb.org/t/p/w500`+item?.poster_path} className = "img"></img>
                                                {/* <div className="nameFilm ">{item?.original_title}</div> */}
                                        </div>
                                )
                            })}
                    </Slider>
                </div>
            </InfiniteScroll>
            <style jsx>{`
            .container{
                        position:relative;
                        height:100%;
                        width:95%;
                        left:30px;
                    }
                    .b{
                        color:white;
                    }
                    .nameFilm {
                        color:white;
                        text-align:center; 
                        margin-top:5px;
                        font-family: 'Poppins', sans-serif;
                    }
                    .tooltip{
                        color:white;
                        margin-left:30px;
                        margin-top:80px;
                        cursor:pointer;
                    }
                    .tooltiptext{
                        font-size:15px;
                        margin-top:8px;
                        color:grey;
                        display:inline-block;
                        position:relative;
                    }
                    .tooltip .tooltiptext {
                        visibility: hidden;
                        width: 120px;
                        padding-left:30px;
                         /* Position the tooltip */
                        position: absolute;
                        z-index: 1;
                    }
                    .tooltip:hover .tooltiptext {
                        visibility: visible;
                    }
                    .img{
                        height:100%;
                        width:100%;
                        position:relative;
                        padding: 6px;
                    }
                    .movieItem{
                        height:350px;
                        cursor:pointer;
                        outline:none;
                    }
                    .img:active{
                        border:2px solid grey;
                    }
                    .movieItem:hover  {
                        animation:zom 0.5s ease 1 forwards;
                        height:350px;
                        border:2px solid white;
                         {/* animation-duration: 2s; */}
                    }
                    @keyframes zom {
                        50%{
                            transform:scale(1,2)
                        }
                        100%{
                            transform:scale(1)
                        }
                    }
            `}</style>
        </div>
    );
}
export default LoadingMore
