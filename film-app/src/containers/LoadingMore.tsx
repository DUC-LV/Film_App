import React, {useState, useEffect} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRouter } from "next/router";
import { convertSlug } from "../untils";
import getLoadingMovieTheater from "../service/LoadingMore/getLoadingMovieTheater";
const LoadingMore = () => {
    // const { dataLoading, title, post } = props;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    const router = useRouter()
    const[items, setItems] = useState<any>([])
    const[page, setPage] = useState(2)
    const [hasMore, setHasMore] = useState(true)
        useEffect(() => {
            getLoadingMovieTheater(page)
                .then(res => {
                    setItems( res.data.results)
                })
        },[])
        
    const fetchMoreData = async () => {
        getLoadingMovieTheater(page)
            .then(res => {
                if(!page){
                    return 
                }
                setItems([...items,...res.data.results])
                if(items.length === 0 || items.length >= 100){ // chia cắt
                    setHasMore(false)
                }
                setPage(page+1)
            })
    };
    return(
        <div>
            <InfiniteScroll
                dataLength={1}
                next = {fetchMoreData}
                hasMore = {hasMore}
                loader={<h4 style = {{"color":"white"}}>Loading</h4>}
            >
                <div className="container">
                    <div className = "row m-7">
                    {items?.map((item:any) => {
                            return(
                                <img src = {`https://image.tmdb.org/t/p/w500`+item.poster_path} className = "img" onClick={() => {
                                        router.push({
                                            pathname: `/movie/name`,
                                            query:{"":convertSlug(item.title),query:item.id}
                                        })
                                }}/>
                            )
                            })}
                    </div>
                </div>
            </InfiniteScroll>
            <style jsx>{`
                .container{
                    margin-left:20px;
                    margin-top:10px;
                }
                .img{
                    height:350px;
                    width:240px;
                    padding-left: 15px;
                    margin-top:20px;
                    border-radius:13px;
                    cursor:pointer;
                }
                .img:hover  {
                    animation:zom 0.5s ease 1 forwards;
                    height:350px;
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
