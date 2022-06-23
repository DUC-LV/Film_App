import React, { useEffect } from "react";
import LoadingMoreMovie from "../src/containers/LoadingMoreMovie"
const MovieTheater = () => {
      return (
            <div className="main">
                  <LoadingMoreMovie
                        title="Phim Chiếu Rạp"
                        value={2}
                  />
            </div>
)
}
export default MovieTheater;