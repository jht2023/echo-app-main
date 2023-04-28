import React from "react";
import Card from 'react-bootstrap/Card';
import useStyle from "./videoPlayer.style";

interface Props {
    videoImage?: string;    
}

export const AIVideoPlayer:React.FC<Props> = props => {
    const styles = useStyle();

    return  <Card className={styles.cardBody}>
        <Card.Title>
            AI Viewer
        </Card.Title>
        <Card.Body>
        {props.videoImage && <img src={props.videoImage} height={"300px"}/>}
            </Card.Body>    
    </Card>    
}