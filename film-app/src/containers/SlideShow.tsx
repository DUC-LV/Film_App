import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VscTriangleRight } from 'react-icons/vsc'
import Link from "next/link";
import { useRouter } from 'next/router'
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
                            <Link
                                href={{
                                pathname: `/movie` ,
                                query: { id:item.id },
                                }}
                                key={index}
                            >
                                <div className="movieItem" >
                                    <img src={item.image} className = "img"></img>
                                    <div className="nameFilm ">{item.filmName}</div>
                                </div>
                            </Link>
                            
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
                    .tooltip{
                        color:white;
                        margin-left:30px;
                        margin-top:120px;
                        cursor:pointer;
                        position: relative;
                        display: inline-block;
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
                    }
                    @keyframes zom {
                        50%{
                            transform:scale(1,2)
                        }
                        100%{
                            transform:scale(1)
                        }
                    }
                    
                    .nameFilm {
                        color:white;
                        text-align:center; 
                        margin-top:5px;
                    }
                    .tooltiptext{
                        font-size:15px;
                        margin-top:8px;
                        color:grey;
                    }
                    .tooltip .tooltiptext {
                        visibility: hidden;
                        width: 120px;
                        color: white;
                        border-radius: 6px;
                        padding-left:30px;

                         /* Position the tooltip */
                        position: absolute;
                        z-index: 1;
                    }
                    .tooltip:hover .tooltiptext {
                        visibility: visible;
                    }
            `}</style>
        </div>
    );
}
export default SlideShow;