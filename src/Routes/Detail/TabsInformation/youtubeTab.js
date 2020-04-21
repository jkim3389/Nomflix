import React from 'react'
import styled from 'styled-components'
const Container = styled.div``

const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    margin-bottom : 20px;
`

const Video = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`



const YoutubeTab = ({result:{videos:{results:videoList}}}) => (
    <Container>
        <VideoContainer>
            <Video src={`https://www.youtube.com/embed/${videoList[0].key}`} 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen = "true">
            </Video>
        </VideoContainer>
    </Container>
)


export default YoutubeTab


