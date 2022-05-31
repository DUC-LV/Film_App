import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VscTriangleRight } from 'react-icons/vsc'
import Link from "next/link";
import { useRouter } from 'next/router'
import { convertSlug } from "../untils";

export interface DataSliderShow {
    image?:string,
    filmName?:string
    id?:number
}
interface DataSlideShow {
    dataSlideShow?:DataSliderShow[]
    title?:string
    post?:any
}
const SlideShow = (props:DataSlideShow) => {
    const { dataSlideShow, title, post } = props;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    const router = useRouter()
    return(
        <div>
        <h2 className="tooltip">{title}
            <Link href={`${post}`}>
                    <span className="tooltiptext">Xem tất cả <VscTriangleRight style={{
                        "position":"relative",
                        "left":"80px",
                        "bottom":"15px"
                    }} /></span>
            </Link>
        </h2>
        <div className="container">
            <Slider {...settings}>
                    {dataSlideShow?.map((item:any,index) => {
                        return (
                                <div className="movieItem" key={index} onClick = {() => {
                                        router.push({
                                            pathname: `/movie/name`,
                                            query:{"":convertSlug(item.filmName),query:item.id}
                                        })
                                        // router.push(`/movie?${item.id}`, `/movie?${item.filmName}`, { shallow: true });
                                }} >
                                        <img src={item.image} className = "img"></img>
                                        {/* <div className="nameFilm ">{item.filmName}</div> */}
                                </div>
                        )
                    })}
            </Slider>
        </div>
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
export default SlideShow;