import React from "react";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import styled from 'styled-components'

const Container = styled.div`
    align-items : center;
    display: flex;
    justify-content : center;
    font-size : 32px
`
const StyledReactLoading = styled(ReactLoading)`
    margin:auto;
`

export default class Loading extends React.Component {

    render() {
        return (
            <Container>
                        <div>
                            <StyledReactLoading type = {"bars"} color = {"white"}/>
                            <div>Loading...</div>
                        </div>
            </Container>
        )
    }
}