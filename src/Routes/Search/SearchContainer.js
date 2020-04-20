import React from 'react'
import SearchPresenter from './SearchPresenter'
import {tvApi, movieApi} from '../../api'

export default class extends React.Component {
    state = {
        movieResult : null,
        tvResult : null,
        term : "",
        loading : false,
        error : null
    }
    debug
    handleSubmit = (event) => {
        event.preventDefault()
        const {term} = this.state
        if(term !== "") {
            this.searchByTerm()
        }  
        console.log(term)
    }

    updateTerm = (event)=> {
        const {target:{value}} = event
        console.log(value)
        this.setState({
            term : value
        })
    }
    async searchByTerm() {
        const {term} = this.state
        try {
            this.setState({
                loading:true
            })
            const {data:{results:movieResult}} = await movieApi.search(term)
            const {data : {results:tvResult}} = await tvApi.search(term)
            
            this.setState({
                movieResult,
                tvResult
            })
        } catch(e){
            this.setState({
                error : "can not find information on search"
            })
        } finally {
            this.setState({
                loading:false
            })
        }
    }
    render() {
        const { movieResult, tvResult, term, loading, error} = this.state
        return <SearchPresenter
            movieResult = {movieResult}
            tvResult = {tvResult}
            term = {term}
            loading = {loading}
            error = {error}
            handleSubmit = {this.handleSubmit}
            updateTerm = {this.updateTerm}

        />
    }
}