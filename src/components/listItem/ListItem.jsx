import "./listItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useState } from "react";



export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  
  

  return (

    <div 
      className="listItem" 
      style={{left: isHovered && index * 225 - 50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}>
        <img src="assets/images/community01.jfif" alt="" />
        {isHovered && (
          <>
          <iframe className="video" src="https://www.youtube.com/embed/qBr_i-pCvy0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowfullscreen></iframe>
          
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon"/>
              <AddIcon className="icon"/>
              <ThumbUpOutlinedIcon className="icon"/>
              <ThumbDownAltOutlinedIcon className="icon"/>
  
            </div>
            <div className="itemInfoTop">
              <span>1 hour 5 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">This is the Description222</div>
            <div className="genre">Action</div>
          </div></>

        )}
        
    </div>
    );
}
