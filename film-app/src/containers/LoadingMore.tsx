import React, { useEffect, useState } from 'react';
import getLoading from "../service/getLoading";
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import { convertSlug } from '../untils';
// export interface Data {
//     image?:string,
//     filmName?:string
//     id?:number
// }
// interface DataLoading {
//     dataLoading?:Data[]
//     title?:string
//     post?:any
// }
const LoadingMore = () => {
    const [dataLoad, setDataLoad] = useState<any>()
    const [page, setPage] = useState(2)
    const router = useRouter()
    useEffect(() => {
        getLoading()
            .then(res => {
                console.log(res.data.results)
            })
    },[])
    
    // window.onscroll = function(){
    //     if(window.innerHeight + document.documentElement.scrollTop ===  document.documentElement.offsetHeight){
    //         scrollToEnd()
    //     }
    // }
    useEffect(() => {
        const scrollToEnd = () => {
            setPage(page+1)
        }
        window.onscroll = function(){
            if(window.innerHeight + document.documentElement.scrollTop ===  document.documentElement.offsetHeight){
                scrollToEnd()
            }
        }
    },[])
    const settings = {
        infinite: true,
        slidesToShow: 5,
    }
    useEffect(() => {
        getLoading()
            .then(res => {
                    setDataLoad(res.data.results)
            })
    },[])
    return(
        <div className = "app">
            {/* <Slider {...settings}> */}
                    {dataLoad?.slice(0,5)?.map((item:any,index:any) => {
                        return (
                                <div className="movieItem" key={index} onClick = {() => {
                                        router.push({
                                            pathname: `/movie/name`,
                                            query:{"":convertSlug(item.filmName),query:item.id}
                                        })
                                        // router.push(`/movie?${item.id}`, `/movie?${item.filmName}`, { shallow: true });
                                }} >
                                        <img src={`https://image.tmdb.org/t/p/w500`+item.poster_path} className = "img"></img>
                                        {/* <div className="nameFilm ">{item.filmName}</div> */}
                                </div>
                        )
                    })}
            {/* </Slider> */}
            {}
            {/* <p className = "loading">haha</p>
            <style jsx>{`
                .loading {
                    color:white;
                }
            `}</style>
            <InfiniteScroll
            dataLength={10}
            >
                <Slider>

                </Slider>
            </InfiniteScroll> */}
        </div>
    );
}
export default LoadingMore;
// {dataLoad?.map((item:any,index:any) => {
//     {console.log(`https://image.tmdb.org/t/p/w500`+ item.backdrop_path)}
//     return(
//         <Slider {...settings} key={index}>
//             <div className = "movieItem" >
//                 <img className = "img" src={`https://image.tmdb.org/t/p/w500`+ item.backdrop_path}/>
//             </div>
//         </Slider>
//     );
// })}
{/* <Slider {...settings}>
                    {dataLoad?.slice(0,6)?.map((item:any,index:any) => {
                        return (
                                <div className="movieItem" key={index} onClick = {() => {
                                        router.push({
                                            pathname: `/movie/name`,
                                            query:{"":convertSlug(item.filmName),query:item.id}
                                        })
                                        // router.push(`/movie?${item.id}`, `/movie?${item.filmName}`, { shallow: true });
                                }} >
                                        <img src={`https://image.tmdb.org/t/p/w500`+item.poster_path} className = "img"></img>
                                        {/* <div className="nameFilm ">{item.filmName}</div> */}
                //                 </div>
                //         )
                //     })}
                // </Slider> */}