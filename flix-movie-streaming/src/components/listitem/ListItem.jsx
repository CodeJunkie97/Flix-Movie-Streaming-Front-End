import './listitem.scss'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Add from '@mui/icons-material/Add'
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbDownOutlined from '@mui/icons-material/ThumbDownOutlined'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import axios from "axios";
import { Link } from 'react-router-dom'
function ListItem({index, item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({})
  useEffect(() => {
    const getMovie = async ()=>{
      try{
        const res = await axios.get("/movies/find/" + item , 
       { headers: {
          token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzYzMzc2OWI4NDFhNDliYWVmMmU1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTk5MjY2NCwiZXhwIjoxNjg2NDI0NjY0fQ.9kfZpzIxnMzgsORQlizDpaXKSUNR3hYgPvs0ycaQz1w"
        },
      });
      setMovie(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  return (
    <Link to="/watch" state ={{movie: movie }}>
    <div className="listItem" style = {{left: isHovered && index * 225 - 50 + index *2.5}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={movie.image} alt = "" />
    {isHovered && (
    <>
    <ReactPlayer
          playing = {true}
          className='video'
          url={movie.trailer}
          width='100%'
          height='140px'
          loop = "true"
        />
    <div className="itemInfo">
      <div className="icons">
        <PlayArrow className="icon"/>
        <Add className="icon"/>
        <ThumbUpAltOutlined className="icon"/>
        <ThumbDownOutlined className="icon"/>
      </div>
      <div className="itemInfoTop">
        <span>{movie.duration}</span>
        <span className = "limit">{movie.limit}</span>
        <span>{movie.year}</span>
      </div>
      <div className="description">
        {movie.description}
      </div>
      <div className="genre">
        {movie.genre}
      </div>
    </div>
    </>
    )}
    </div>
    </Link>
  );
}

export default ListItem