import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const StyledLink = styled(Link)`
    &:hover {
            text-decoration : none;
            color : white;
        }
`
const Container = styled.div`
    font-size : 12px;
`

const Image = styled.div`
    background-image : url(${props=>props.bgUrl});
    height : 180px;
    background-size : cover;
    border-radius : 10px;
    background-position : center center;
    transition: opacity 0.1s ease-in-out;
`
const Rating = styled.span`
    position : absolute;
    bottom : 5px;
    right : 5px;
    opacity  : 0;
    transition: opacity 0.1s ease-in-out;
`
const ImageContainer = styled.div`
    margin-bottom: 5px;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity : 1
        }
    }
    position : relative;
`

const Title = styled.span`
    display: block;
    margin-bottom : 3px;
`
const Year = styled.span`
    font-size : 10px;
    color: rgba(255,255,255,0.5);
`

const Poster = ({id, imageUrl, title, rating, year, isMovie=false}) => (
    <StyledLink to = {isMovie? `/movie/${id}/` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl = {imageUrl? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../Assets/notFoundPoster.png")}/>
                <Rating>
                    <span role="img" aria-label = "rating">
                        ⭐️
                    </span>{" "}
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title}</Title>
            <Year>{year}</Year>
        </Container>
    </StyledLink>
)

Poster.propTypes = {
    id  : PropTypes.number.isRequired,
    imageUrl : PropTypes.string, 
    title : PropTypes.string.isRequired, 
    rating : PropTypes.number, 
    year : PropTypes.number,
    isMovie : PropTypes.bool
}
export default Poster