import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export interface DataSlider {
    image?:string,
    id?:any
    filmName?:string
}
interface DataSlide {
    dataSlide?:DataSlider[]
}
const Slide = (props:DataSlide) => {
    const { dataSlide } = props;
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        speed: 2000,
     //    centerMode: true,
    };
    return(
        <>
        <div className = "container">
            <Slider {...settings}>
                    {dataSlide?.map((item:any,index) => {
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
                                    <p className = "movieName">{item.filmName}</p>
                                </div>
                            </Link>
                            
                        )
                    })}
            </Slider>
            <style jsx>{`
                    .container{
                        position:relative;
                        right:800px;
                        top:50px;
                        padding: 20px 20px 0;
                        height:100%;
                        width:150%;
                    }
                    .img{
                        height:100%;
                        width:100%;
                        position:relative;
                        padding: 6px
                    }
                    .movieName{
                        color:white;
                        cursor:pointer;
                    }
                    .movieItem{
                        height:400px;
                        cursor:pointer;
                        outline:none;
                    }
                    .img:active{
                        border:2px solid grey;
                    }
                    .movieItem:hover  {
                        animation:zom 0.5s ease 1 forwards;
                        height:400px;
                        width:400px;
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
            `}</style>
        </div>
        </>
    );
}
export default Slide;