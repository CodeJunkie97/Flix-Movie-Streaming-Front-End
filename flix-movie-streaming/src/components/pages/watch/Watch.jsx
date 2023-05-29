import './Watch.scss'
import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined'
import ReactPlayer from 'react-player'
import { useState } from 'react';
export default function Watch(){
    const [played, setPlayed] = useState(0);
    return(
        <div className='watch'>
            <div className='back'>
                <ArrowBackOutlined />
                Home
            </div>
        <ReactPlayer
          className='video'
          playing = {true}
          width = '100%'
          height = '100%'
          onProgress={(progress) => {
            setPlayed(progress.playedSeconds);
          }}
          controls
          url = "https://www.youtube.com/watch?v=RMhbr2XQblk"
        />
        </div>
    )
}