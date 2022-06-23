import React, { useEffect, useState } from "react";    
import { useRouter } from "next/router"
import getSearchMovieByName from "../../src/service/getSearchMovieByName";
const search = () => {
    const router = useRouter()
    const txt = router.query
    useEffect(() => {
        if(txt.m){
            getSearchMovieByName(txt.m)
                .then(res => {
                    console.log(res.data.results)
                })
        }
    },[txt.m])
    return(
        <div></div>
    )
}
export default search;