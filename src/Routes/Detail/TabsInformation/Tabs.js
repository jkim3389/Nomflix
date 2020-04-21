import React from 'react'
import styled from 'styled-components'
import {Link, withRouter} from 'react-router-dom'
import YoutubeTab from './youtubeTab'
import ProductionTab from './ProductionTab'

const TabContainer = styled.div`
    width : 100%;
    height : 80%;
   
`
const MenuContainer = styled.ul`
    display : flex;
    width : 70%;
    background-color: rgba(0,0,0,0.3);
    border-radius : 10px;
    /* justify-content : center; */
    margin-bottom : 30px;
    /* padding : 0px */
`
const MenuButton = styled.li`
    /* margin : 15px; */
    display : inline-block;
    list-style-type : none;
    padding : 15px;
    height : 100%;
    width : 100%;
    justify-content : center;
    text-align : center;
    align-items : center;
    border-bottom : solid 3px ${props=> props.current? "rgba(255,255,255)" : "transparent"};
`
const SLink = styled(Link)`


`
const MenuContent = styled.div`
    width : 70%;
    height : 100%;
`

const CircleContainer = styled.ul`
    width: 100%;
    display : flex;
    justify-content : center;
`
const Circle = styled.li`
    padding : 20px 20px;
    margin : 0px 20px;
    background-color : rgba(255,255,255, 0.5);
    border-radius : 40%;
`
export default withRouter(({location, result}) => (
    <TabContainer>
        <MenuContainer>
            <MenuButton current = {location.search === "?tab=video" || location.search ===""}>
                <SLink to = {`${location.pathname}?tab=video`}>Video</SLink>
            </MenuButton>
            <MenuButton current = {location.search === "?tab=production"}>
                <SLink to = {`${location.pathname}?tab=production`}>Production</SLink>    
            </MenuButton>
            <MenuButton  current = {location.search === "?tab=cast"}>
                <SLink to = {`${location.pathname}?tab=cast`}>Cast</SLink>        
            </MenuButton>
            <MenuButton  current = {location.search === "?tab=series"}>
                <SLink to = {`${location.pathname}?tab=series`}>Series</SLink>        
            </MenuButton>
            <MenuButton  current = {location.search === "?tab=more"}> 
                <SLink to = {`${location.pathname}?tab=more`}>More</SLink>        
            </MenuButton>
        </MenuContainer>
        <MenuContent>
            {location.search === '?tab=video' || location.search === "" ? <YoutubeTab result = {result} /> : null}
            {location.search === '?tab=production' ? <ProductionTab result = {result} /> : null}
            {location.search === '?tab=cast' ? 'cast here' : null}
            {location.search === '?tab=series'  ? 'series here' : null}
            {location.search === '?tab=more'  ? 'more here' : null}
        </MenuContent>
    </TabContainer>

))
