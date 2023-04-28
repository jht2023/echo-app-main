import React, {useRef, useState} from "react";
import ReactPlayer from "react-player";
import Card from 'react-bootstrap/Card';
import useStyle from "./videoPlayer.style";

import {captureVideoFrame} from "../../lib/videoUtils";

interface Props {    
    onProgress?: any;
}

export const VideoPlayer:React.FC<Props> = props => {
    const styles = useStyle();
    let reference = useRef<any>(null);
    const [videoFilePath, setVideoFilePath] = useState<string>("");    
    
    const handleVideoUpload = (event: any) => {
        setVideoFilePath(URL.createObjectURL(event.target.files[0]));
    };

    const handleVideoProgress = async (event: any) => {                        
        const videoFrame = captureVideoFrame(reference.current.getInternalPlayer());        
        props.onProgress(videoFrame.dataUri);
    }

    return <Card className={styles.cardBody}>
        <Card.Title>
            Video Player
        </Card.Title>   
        <Card.Body>
        <input type="file" onChange={handleVideoUpload} />
        <ReactPlayer
         url={videoFilePath}
         width='100%'         
         controls={true}
         onProgress = {handleVideoProgress}        
        
        ref = {reference}
         />
         </Card.Body>    
    </Card>

}