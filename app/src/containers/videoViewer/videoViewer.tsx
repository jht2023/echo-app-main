import React, {useContext, useEffect, useState} from "react";

import { Col, Container, Row } from 'react-bootstrap';

import {VideoPlayer} from "../../components/video/videoPlayer"


import AppContext from "../../app-context";

import useStyle from "./videoViewer.style";
import { AIVideoPlayer } from "../../components/video/aiPlayer";

interface Props {    
}

export const VieoViewerContainer: React.FC<Props> = props => {
    const context = useContext(AppContext);
    const styles = useStyle();
        
    const [videoImage, setVideoImage] = useState<string>("");
    
    if (!context.apiClient) {return <div/>}
    
    const handleVideoProgress =  async (videoFrameData: string) => {   
        if (!context.apiClient) { return; }
        const response = await context.apiClient.analyseImage(videoFrameData);             
        if (!response.extra) { return; }
        const aiImage = response.extra.imageData;
        console.log('github lec - branch test with Leeさん');
        setVideoImage(aiImage);
    }
    
    
    return (
        <Container className={styles.body}>
            <Col>
            <Row className={styles.videoRow}>                
                <VideoPlayer onProgress={handleVideoProgress}/>            
            </Row>
            <Row className={styles.videoRow}>                
                <AIVideoPlayer videoImage={videoImage}/>
            </Row>
            </Col>
        </Container>
    )
};