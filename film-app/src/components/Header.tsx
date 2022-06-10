import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState,useCallback } from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { convertSlug } from "../untils";
export const Header = () => {
     const router = useRouter();
     const [searchTxt, setSearchTxt] = useState("");
     const handleSearch = useCallback(() => {
          if (!searchTxt) return;
          router.push({
               pathname : `/movie/movies`,
               query:{query:convertSlug(searchTxt)}
          })
     }, [searchTxt]);
     
     return(
          <div className="container">
               <div className="head">
                    <a href="/HomePage">
                         <img className="image" src="https://images.pexels.com/photos/918281/pexels-photo-918281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </a>
                    <div className="list-menu">
                         <ul>
                              <li className = {(router.pathname == '/HomePage' || router.pathname == "/" )? 'items':'item'}  >
                                   <Link href = {{
                                        pathname :"/"
                                        }}>
                                        Trang Chủ
                                   </Link>
                              </li>
                              <li className = {router.pathname == '/movie-theaters' ? 'items':'item'} >
                                   <Link href = {{
                                        pathname : "/movie-theaters",
                                        }}>
                                        Phim Chiếu Rạp
                                   </Link>
                              </li>
                              <li  className = {router.pathname == '/cartoon' ? 'items':'item'} >
                                   <Link href = {{
                                        pathname : "/cartoon",
                                        }}>
                                        Phim Hoạt Hình
                                   </Link>
                              </li>
                              <li  className = {router.pathname == '/rank-movie' ? 'items':'item'} >
                                   <Link href = {{
                                        pathname : "/rank-movie",
                                        }}>
                                        Bảng Xếp Hạng
                                   </Link>
                              </li>
                              <li  className = {router.pathname == '/list-actor' ? 'items':'item'} >
                                   <Link href = {{
                                        pathname : "/list-actor",
                                        }}>
                                        Diển Viên
                                   </Link>
                              </li>
                         </ul>
                    </div>
               </div>
               <div className="body">
                    <input
                         type = "text"
                         className = "input-body" 
                         placeholder="Tìm Kiếm "
                         value = {searchTxt}
                         onChange = {(e:any) => setSearchTxt(e.target.value)}
                    ></input>
                    <button
                         className = "button-body"
                         onClick={handleSearch}
                    ><AiOutlineSearch style={{"position":"relative","top":"3px"}} /></button>
                    <button className="login" onClick = {() => {
                         router.push({
                              pathname:"/login"
                         })
                    }}>Đăng Nhập</button>
               </div>
               <style jsx>{`
                    .container{
                         height:64px;
                         width:100%;
                         background-color:black;
                    }
                    .image{
                         height:60px;
                         width:100px;
                         margin-left: 10px;
                         margin-top: 2px;
                         border-radius: 5px;
                    }
                    .menu-top ul{
                         margin: 0px;
                         padding: 0px;
                    }
                    .list-menu{
                         font-size: 18px;
                    }
                    ul li {
                         float: left;
                         color: rgba(255,255,255,0.7);
                         list-style: none;
                         margin-left:60px;
                         position:relative;
                         bottom:60px;
                         left:60px;
                    }
                    .item:hover{
                         color:white;
                    }
                    .items{
                         float: left;
                         list-style: none;
                         margin-left:70px;
                         position:relative;
                         bottom:60px;
                         border-bottom:3px solid white;
                    }
                    .input-body{
                         border: 1px solid grey;
                         outline:none;
                         height:35px;
                         width:300px;
                         border-radius:10px;
                         margin-left:150px;
                         position:relative;
                         bottom:70px;
                         background:#F0F0F0;
                         text-align:center;
                    }
                    .button-body{
                         border: none;
                         outline:none;
                         height:33px;
                         border-radius:10px;
                         cursor:pointer;
                         position:relative;
                         bottom:67px;
                         right:33px;
                         font-size:20px;
                    }
                    ::placeholder {
                         text-align:center;
                    }
                    .login{
                         height:35px;
                         width:100px;
                         border:none;
                         cursor:pointer;
                         border-radius:10px;
                         background-color:red;
                         font-family: 'Poppins', sans-serif;
                         font-size:15px;
                         color:white;
                         margin-left:20px;
                         position:relative;
                         bottom:70px;
                    }
               `}</style>
          </div>
     );
}
export default Header;