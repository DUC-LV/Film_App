import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
    return(
        <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=YoSLyg1m-JE' 
                width='650px'
                height = '350px'
                controls
                playing = {true}
            />
        </div>
    );
}
export default Video;