import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Loading from '../../Components/Loading'
import Section from '../../Components/Section'
import Error from '../../Components/Error'
import Poster from '../../Components/Poster'
import {Helmet} from 'react-helmet'
const Container = styled.div`
    padding: 20px;
`
const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`
const Input = styled.input`
    all: unset;
    font-size: 30px;
    width: 100%;
`

const SearchPresenter = ({movieResult, tvResult, term, loading, error, handleSubmit, updateTerm})=> (
    <Container>
        <Helmet>
            <title>  Search | Nomflix </title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
            <Input 
            placeholder="Search Movies or TV shows" 
            value={term} 
            onChange={updateTerm}
            />
        </Form>

        {loading? <Loading/> :  
        <>
            {movieResult && movieResult.length>0 && 
            <Section title="Movies">
                {movieResult.map((movie)=> 
                    <Poster key= {movie.id} id = {movie.id} imageUrl = {movie.poster_path} title= {movie.title}  rating = {movie.vote_average} year = {(new Date(movie.release_date)).getFullYear()} isMovie = {true}/>
                )}
            </Section>}
            {tvResult && tvResult.length > 0 && (
            <Section 
                title = "TV Shows"> {tvResult.map((tv)=> 
                    <Poster key= {tv.id} id = {tv.id} imageUrl = {tv.poster_path} title= {tv.name}  rating = {tv.vote_average} year = {(new Date(tv.first_air_date)).getFullYear()} isMovie = {false}/>
                )} 
            </Section>
            )}
        
            {error && <Error text = {error}/>}
            {tvResult && movieResult && tvResult.length ===0 && movieResult.length ===0 && (
                <Error text = "Nothing Found" color = "#95a5a6"/>
            )}
        </>}
    </Container>
)

SearchPresenter.propTypes = {
    movieResult : PropTypes.array , 
    tvResult : PropTypes.array , 
    term : PropTypes.string , 
    loading : PropTypes.bool.isRequired , 
    error : PropTypes.string , 
    handleSubmit : PropTypes.func.isRequired ,
    updateTerm : PropTypes.func.isRequired 
}

export default SearchPresenter
