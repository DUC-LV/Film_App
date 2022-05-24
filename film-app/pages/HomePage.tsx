import React from "react"
import { useState, useEffect } from "react"
import getListFilmHomePage from "../src/service/getListFilmHomePage"

const HomePage = () => {
  useEffect(() => {
    getListFilmHomePage()
      .then(res => {
        console.log(res.data)
      })
  })
  return (
    <div></div>
  )
}

export default HomePage;
