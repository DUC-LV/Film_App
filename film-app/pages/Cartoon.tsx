import React, { useState, useEffect } from "react"
import LoadingMoreMovie from "../src/containers/LoadingMoreMovie";
const CarToon = () => {
      return(
            <div className="main">
                  <LoadingMoreMovie 
                        title="Phim Hoạt Hình"
                        value={1}
                  />
            </div>
      )
}
export default CarToon;