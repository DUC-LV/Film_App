import React from "react";
import styled from "styled-components"
export interface DataSlider {
     image?:string,
     title?:string,
     time?:string,
}
interface DataSliderTop {
     dataSliderTop?:DataSlider[]
}
const SliderOneItem = (props:DataSliderTop) => {
     const { dataSliderTop } = props;
     const MoviesRowContainer = styled.div`
          background-color: var(--color-background);
          paddind: 20px 20px 0;
          position:relative;
          height:100%;
          width:100%;
          right:50%;
     `;
     const MoviesSlider = styled.div`
          display:grid;
          grid-template-columns:repeat(6,200px);
          gap:6px;
          transition: all 0.3s linear;
          user-select:none;
          overflow-y:hidden;
          overflow-x:auto;
          overflow:hidden;
          padding-top:28px;
          padding-bottom:28px;
          scroll-behavior:smooth;
          .movieItem{
               transform:scale(1);
               max-width:300px;
               max-height:300px;
               height:100%;
               width:100%;
               transition: all 0.3s linear;
               user-select:none;
               overflow:hidden;
               border-radius:6px;
               transform:center left;
               position:relative;
          }
          &:hover{
               
               transform:scale(1.1);
               z-index:5;
          }
     `;
     return (
          <MoviesRowContainer>
               <MoviesSlider>
                    {dataSliderTop?.map((item:any,index) => {
                         return (
                              <div className="movieItem" key={index}>
                                   <img src={item.image}></img>
                                   <p className = "movieName">{item.title}</p>
                              </div>
                         )
                    })}
               </MoviesSlider>
          </MoviesRowContainer>
     );
}
export default SliderOneItem;

