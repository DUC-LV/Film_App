import React from "react"
import { GetServerSideProps } from "next"
import getMovieTheater  from '../src/service/getMovieTheater'
export interface DataMovie {
  image?:string,
  filmName?:string
  id?:any
}

type Props = {
  data?: any;
}
const MovieTheater = ({ data }:Props) => {
  console.log(data)
  return (
    <div></div>
  )
}

export default MovieTheater;
export const getServerSideProps: GetServerSideProps<Props> = async ({req,}) => {
  // const config = {
  //      proxy: { host: '192.168.193.12', port: 3128 }
  // }
  const res = await getMovieTheater.getAll()
  return {
    props: { data: res.data.results },
}}
