import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Loading from '../../Components/Loading'
import {Helmet} from 'react-helmet'
import Tabs from './TabsInformation/Tabs'
const Container = styled.div`
    height : calc(100vh - 50px);
    width : 100%;
    position : relative;
    padding : 50px
`

const Backdrop = styled.div`
    position : absolute;
    top: 0;
    left : 0;
    width : 100%;
    height : 100%;
    background-image : url(${props => props.bgImg});
    background-position : center center;
    background-size : cover;
    filter : blur(3px);
    opacity : 0.5;
    z-index : 0;

`
const Content = styled.div`
    display : flex;
    width : 100%;
    height : 100%;
    z-index : 1;
    position : relative;
`

const Cover = styled.div`
    background-image : url(${props=> props.bgImg});
    background-size : cover;
    background-position : center center;
    height: 100%;
    width: 30%;
    border-radius : 10px;
`

const Information = styled.div`
    height : 100%;
    width : 70%;
    margin-left : 20px;
`

const ItemContainer = styled.div`
 margin : 20px 0;
`

const Title = styled.h1`
    font-size : 32px;
    margin-bottom : 20px;
`
const Description = styled.p`
    font-size : 12px;
    opacity : 0.7;
    line-height : 2;
    width : 70%;
    margin-bottom : 20px;
`
const Item = styled.span`

`
const Divider = styled.span`
    margin : 0 10px;
`
const DetailPresenter = ({result, error, loading}) => (
    <>
    <Helmet>
        <title>Details | Nomflix</title>
    </Helmet>
    {loading? 
    <Loading/> : (
    <Container>
        <Backdrop bgImg = {`https://image.tmdb.org/t/p/original${result.backdrop_path}`}/>
        <Content>
            <Cover bgImg = {result.poster_path? `https://image.tmdb.org/t/p/original${result.poster_path}` : require('../../Assets/notFoundPoster.png')}/>
            <Information>
                <Title>
                    {result.title? result.title : result.name}
                </Title>
                <ItemContainer>
                    <Item>{result.release_date? (new Date(result.release_date)).getFullYear() : (new Date(result.first_air_date)).getFullYear()}</Item>
                    <Divider>·</Divider>
                    <Item>{result.runtime ? result.runtime : result.episode_run_time[0]} Min</Item>
                    <Divider>·</Divider>
                    <Item>{result.genres && result.genres.map((shows, index)=> (index === result.genres.length-1)? shows.name : `${shows.name} / `)}</Item>
                </ItemContainer>
                <Description>
                    {result.overview}
                </Description>
                <Tabs result = {result}></Tabs>
            </Information>
            
        </Content>

    </Container>
    )}
    </>
)

DetailPresenter.propTypes = {
    result : PropTypes.object,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired
}

export default DetailPresenter