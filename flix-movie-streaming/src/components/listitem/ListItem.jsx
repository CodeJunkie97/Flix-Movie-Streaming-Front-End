import './listitem.scss'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Add from '@mui/icons-material/Add'
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbDownOutlined from '@mui/icons-material/ThumbDownOutlined'
function ListItem() {
  return (
    <div className="listItem">
        <img src="https://c4.wallpaperflare.com/wallpaper/827/638/353/movie-gran-torino-clint-eastwood-gran-torino-movie-wallpaper-preview.jpg" alt = "" />
    <div className="itemInfo">
      <div className="icons">
        <PlayArrow />
        <Add />
        <ThumbUpAltOutlined />
        <ThumbDownOutlined />
      </div>
      <div className="itemInfoTop">
        <span>1 hour 14 mins</span>
        <span className = "limit">+16</span>
        <span>1999</span>
      </div>
      <div className="desription">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. 
      </div>
      <div className="genre">
        Action
      </div>
    </div>
    </div>
  )
}

export default ListItem