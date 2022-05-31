import React, { useEffect, useState } from "react"; 
import { useRouter } from "next/router";
import getSearchMovieByName from "../../src/service/getSearchMovieByName";

const movies = () => {
    const router = useRouter()
    const {
        query: { query },
    } = router
    useEffect(() => {
        if(query){
            getSearchMovieByName(query)
                .then(res => {
                    console.log(res.data)
                })
        }
    })
    return(
        <div></div>
    );
}
export default movies;