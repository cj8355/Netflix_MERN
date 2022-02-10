import "./listItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from 'react-router-dom';



export default function ListItem({index, item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmEyMWVhMTBiOTI4YzYwYTMxYzRjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDM4MzMyMCwiZXhwIjoxNjQ0ODE1MzIwfQ.NjmQW_wl8Orqb0s_JGsBlzcMAWobtrqAqvnTjQCYkcY"
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie()
  }, [item]);

  return (
    <Link to={{pathname:"/watch", movie: movie}}>

    <div 
      className="listItem" 
      style={{left: isHovered && index * 225 - 50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}>
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
          <video src={movie.trailer} autoPlay={true} loop type="video/mp4"/>
          
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon"/>
              <AddIcon className="icon"/>
              <ThumbUpOutlinedIcon className="icon"/>
              <ThumbDownAltOutlinedIcon className="icon"/>
  
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div></>

        )}
        
    </div>
    </Link>
    );
}
