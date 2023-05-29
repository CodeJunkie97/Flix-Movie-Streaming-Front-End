import './listitem.scss'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Add from '@mui/icons-material/Add'
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbDownOutlined from '@mui/icons-material/ThumbDownOutlined'
import { useState } from 'react'
import ReactPlayer from 'react-player'
function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.youtube.com/watch?v=RMhbr2XQblk"
  return (
    <div className="listItem" style = {{left: isHovered && index * 225 - 50 + index *2.5}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src="https://c4.wallpaperflare.com/wallpaper/827/638/353/movie-gran-torino-clint-eastwood-gran-torino-movie-wallpaper-preview.jpg" alt = "" />
    {isHovered && (
    <>
      <ReactPlayer
          playing = {true}
          className='video'
          url={trailer}
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
        <span>1 hour 14 mins</span>
        <span className = "limit">+16</span>
        <span>1999</span>
      </div>
      <div className="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. 
      </div>
      <div className="genre">
        Action
      </div>
    </div>
    </>
    )}
    </div>
  );
}

export default ListItem