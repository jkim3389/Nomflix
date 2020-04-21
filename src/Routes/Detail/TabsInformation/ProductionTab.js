import React from 'react'
import styled from 'styled-components'

const Container = styled.div` 
    background-color : rgba(0,0,0, 0.3);
    padding : 20px;
    margin-bottom : 20px;
    `

const CompanyContainer = styled.div`
    margin-top : 20px;
    display : grid;
    grid-template-columns : repeat(auto-fill, 180px);
    grid-gap : 15px;

`

const Company = styled.div`
    /* width : 50%; */
    flex: 1;
    height: auto;
    background-color: rgba(24, 24, 28, 0.85);
    border-radius: 4px;
    padding: 5px;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    /* display : flex; */
`
const Logo = styled.div`
    height : 150px;
    width: 100%;
    background-image : url(${props=> props.bgImg});
    background-size : cover;
    background-position : center center;
`
const CountryContainer = styled.div`
    background-color : rgba(0,0,0, 0.3);
    padding : 20px;
`

const Country = styled.div`
    margin-top : 10px;
    padding : 10px 10px;
    background-color: rgba(24, 24, 28, 0.85);
`




const ProductionTab = ({result:{production_companies:companies}, result:{production_countries:countries}}) => (
   <>
    <Container>
        Production Companies
        <CompanyContainer>      
            {companies.map((company, index) => (
            <Company>
                <Logo key={index} bgImg = {company.logo_path? `https://image.tmdb.org/t/p/w300${company.logo_path}` : require('../../../Assets/notFoundPoster.png')}/>
                {company.name}                
            </Company>))}
        </CompanyContainer>
    </Container>
        <CountryContainer>
        Production Countries
            {countries.map((country, index) => (
                <Country>{` - ${country.name}`}</Country>
            ))}
            
        </CountryContainer>
    </>
)


export default ProductionTab


