import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from '../../Components/Section'
import Loading from '../../Components/Loading'
import Error from '../../Components/Error'
import Poster from '../../Components/Poster'
import {Helmet} from "react-helmet";

const Container = styled.div`
    padding : 20px;
`

//children doesn't provide to prop. 
const HomePresenter = ({nowPlaying, upcoming, popular, loading, error}) => (
    <> 
    <Helmet>
        <title>  Movie | Nomflix </title>
    </Helmet>
    {loading? 
    <Loading/>: (
    <Container>
        {nowPlaying && nowPlaying.length>0 && 
        <Section title="Now Playing">
            {nowPlaying.map((movie)=> 
                <Poster key= {movie.id} id = {movie.id} imageUrl = {movie.poster_path} title= {movie.title}  rating = {movie.vote_average} year = {(new Date(movie.release_date)).getFullYear()} isMovie = {true}/>
//                <span key = {movie.id}>{movie.title}</span>
            )}
        </Section>}

        {upcoming && upcoming.length>0 && 
        <Section title="Upcoming">
            {upcoming.map((movie)=> 
                <Poster key= {movie.id} id = {movie.id} imageUrl = {movie.poster_path} title= {movie.title}  rating = {movie.vote_average} year = {(new Date(movie.release_date)).getFullYear()} isMovie = {true}/>
            )}
        </Section>}

        {popular && popular.length>0 && 
        <Section title="Popular">
            {popular.map((movie)=> 
                <Poster key= {movie.id} id = {movie.id} imageUrl = {movie.poster_path} title= {movie.title}  rating = {movie.vote_average} year = {(new Date(movie.release_date)).getFullYear()} isMovie = {true}/>
            )}
        </Section>} 

        {error && <Error text = {error} color = "#e74c3c"/>}
    </Container>
)}</>)

HomePresenter.propTypes = {
    nowPlaying : PropTypes.array,
    upcoming : PropTypes.array, 
    popular : PropTypes.array, 
    loading : PropTypes.bool.isRequired, 
    error : PropTypes.string
}



export default HomePresenter 