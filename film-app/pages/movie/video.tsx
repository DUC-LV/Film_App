import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
    return(
        <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=8mZ95Qh8GvY' 
                width='700px'
                height = '400px'
                controls
                playing = {true}
            />
        </div>
    );
}
export default Video;