import './featured.scss'
import PlayArrow from '@mui/icons-material/PlayArrow'
import InfoOutlined from '@mui/icons-material/InfoOutlined'
function Featured({type}) {
  return (
    <div className = "featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id ="genre">
                    <option>Genre</option>
                    <option value = "adventure">Adventure</option>
                    <option value = "animation">Animation</option>
                    <option value = "comedy">Comedy</option>
                    <option value = "crime">Crime</option>
                    <option value = "documentary">Documentary</option>
                    <option value = "drama">Drama</option>
                    <option value = "fantasy">Fantasy</option>
                    <option value = "historical">Historical</option>
                    <option value = "horror">Horror</option>
                    <option value = "romance">Romance</option>
                    <option value = "sci-fi">Sci-Fi</option>
                    <option value = "thriller">Thriller</option>
                    <option value = "western">Western</option>
                </select>
            </div>
        )}
        <img 
            src = "https://th.bing.com/th/id/OIP.4oBn_yCg_ZvGg2ENIW8s9gHaDt?pid=ImgDet&rs=1"
            alt = ""
        />
        <div className="info">
            <img
            src = "https://www.themoviedb.org/t/p/w1280/diwwHcWgTMdb7hXbWVwrRluuoBL.png"
            alt = ""
            />
        <span className = "desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        
        </span>
        <div className = "buttons">
            <button className = "play">
                <PlayArrow />
                <span>Play</span>
            </button>
            <button className = "more">
                <InfoOutlined />
                <span>Info</span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Featured