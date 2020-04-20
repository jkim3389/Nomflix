import React from 'react'
// import styles from './Header.module.css'
import styled from 'styled-components'
import {Link, withRouter} from 'react-router-dom'

const Header = styled.header`
color: white;
position : fixed;
top : 0px;
left : 0px;
width : 100%;
height : 50px;
display : flex;
align-items : center;

background-color: rgba(20,20,20,0.8);
z-index : 10;
box-shadow : 0px 1px 5px 2px rgba(0,0,0,0.8);
`

const Nav = styled.ul`
    display:flex
`

const Item = styled.li`
    width : 80px;
    height : 50px;
    text-align : center;
    justify-items : center;
    border-bottom: 5px solid ${props=> props.current? "red" : "transparent"};
`

const SLink = styled(Link)`
    height: 50px;
    display : flex;
    align-items : center;
    justify-content : center;
`
export default withRouter(({location:{pathname}})=>(
    <Header>

        <Nav>
            <Item current = {pathname === '/'}>
                <SLink to = "/">Movies</SLink>
            </Item>
            <Item current = {pathname === '/TV'}>
                <SLink to = "/TV">TV</SLink>
            </Item>
            <Item current = {pathname === '/search'}>
                <SLink to = "/search">Search</SLink>
            </Item>

        </Nav>
    </Header>
))