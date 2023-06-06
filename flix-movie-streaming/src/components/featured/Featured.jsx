import './featured.scss'
import PlayArrow from '@mui/icons-material/PlayArrow'
import InfoOutlined from '@mui/icons-material/InfoOutlined'
import { useEffect, useState } from 'react';
import axios from 'axios';
function Featured({type}) {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () =>{
            try{
                const res = await axios.get("/movies/random?type=${type}",
                { headers: {
                    token:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzYzMzc2OWI4NDFhNDliYWVmMmU1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTk5MjY2NCwiZXhwIjoxNjg2NDI0NjY0fQ.9kfZpzIxnMzgsORQlizDpaXKSUNR3hYgPvs0ycaQz1w"
                } });
                setContent(res.data[0]);
            }catch(err){
                console.log(err);
            }
        }
        getRandomContent();
    },[])
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
            src = {content.image}
            alt = ""
        />
        <div className="info">
            <img
            src = {content.imageTitle}
            alt = ""
            />
        <span className = "desc">
        {content.description}
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