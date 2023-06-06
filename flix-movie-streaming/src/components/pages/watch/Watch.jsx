import './Watch.scss'
import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined'
import ReactPlayer from 'react-player'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function Watch(){
  let {state} = useLocation();
  const movie = state.movie;
    const [played, setPlayed] = useState(0);
    return(
        <div className='watch'>
          <Link to = "/">
            <div className='back'>
                <ArrowBackOutlined />
                Home
            </div>
          </Link>
        <ReactPlayer
          className='video'
          playing = {true}
          width = '100%'
          height = '100%'
          onProgress={(progress) => {
            setPlayed(progress.playedSeconds);
          }}
          controls
          url = {movie.video}
        />
        </div>
    )
}