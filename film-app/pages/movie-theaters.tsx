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
  // var queries = [{
  //   columns: 2,
  //   query: 'min-width: 500px'
  // }, {
  //   columns: 3,
  //   query: 'min-width: 1000px'
  // }];
  return (
    <div>
    </div>
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
