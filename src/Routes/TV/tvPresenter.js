import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from '../../Components/Section'
import Loading from '../../Components/Loading'
import Error from '../../Components/Error'
import Poster from '../../Components/Poster'
import {Helmet} from 'react-helmet'
const Container = styled.div`
    padding : 20px;
`

const TvPresenter = ({ topRated, popular, airingToday, loading, error })=> (
    <>
    <Helmet>
        <title>  TV | Nomflix </title>
    </Helmet>
    {loading ? 
    <Loading/>:(
    <Container>
        {topRated && topRated.length > 0 && (
            <Section title = "Top Rated Shows"> {topRated.map((tv)=> 
                <Poster key= {tv.id} id = {tv.id} imageUrl = {tv.poster_path} title= {tv.name}  rating = {tv.vote_average} year = {(new Date(tv.first_air_date)).getFullYear()} isMovie = {false}/>            
            )} </Section>
        )}

        {popular && popular.length > 0 && (
            <Section title = "Popular Shows"> {popular.map((tv)=> 
                <Poster key= {tv.id} id = {tv.id} imageUrl = {tv.poster_path} title= {tv.name}  rating = {tv.vote_average} year = {(new Date(tv.first_air_date)).getFullYear()} isMovie = {false}/>
            )} </Section>
        )}

        {airingToday && airingToday.length > 0 && (
            <Section title = "Airing Today"> {airingToday.map((tv)=> 
                <Poster key= {tv.id} id = {tv.id} imageUrl = {tv.poster_path} title= {tv.name}  rating = {tv.vote_average} year = {(new Date(tv.first_air_date)).getFullYear()} isMovie = {false}/>

            )} </Section>
        )}
        {error && <Error text = {error} color = "#e74c3c"/>}
    </Container>
)}</>)

TvPresenter.propTypes = {
    topRated : PropTypes.array,
    popular : PropTypes.array,
    airingToday : PropTypes.array,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string
}

export default TvPresenter