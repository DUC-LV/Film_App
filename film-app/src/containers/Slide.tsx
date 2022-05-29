import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export interface DataSlider {
    image?:string,
    name?:string,
    time?:string,
}
interface DataSliderTop {
    dataSliderTop?:DataSlider[],
    title?:string,
}
const Slide = (props:DataSliderTop) => {
    const { dataSliderTop, title } = props;
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        speed: 2000,
        centerMode: true,
    };
    return(
        <div className = "container">
            <h2 className = "title">{title}</h2>
                <Slider {...settings}>
                    {dataSliderTop?.map((item:any,index) => {
                        return (
                            <div className="movieItem" key={index}>
                                <img src={item.image} className = "img"></img>
                                {/* <p className = "movieName">{item.name}</p> */}
                            </div>
                        )
                    })}
                </Slider>
                <style jsx>{`
                    .container{
                        position:relative;
                        right:815px;
                        padding: 20px 20px 0;
                        height:100%;
                        width:150%;
                    }
                    .img{
                        height:100%;
                        width:100%;
                        position:relative;
                        border-radius:6px;
                        padding: 6px
                    }
                    .movieItem{
                        height:345px;
                        cursor:pointer;
                    }
                `}</style>
        </div>
    );
}
export default Slide;