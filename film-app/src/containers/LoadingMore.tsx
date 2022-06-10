import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
const LoadingMore = () => {
    return(
        <div>
            <p className = "loading">haha</p>
            <style jsx>{`
                .loading {
                    color:white;
                }
            `}</style>
        </div>
    );
}
export default LoadingMore;