import React from 'react'
import DetailPresenter from './DetailPresenter'
import {movieApi, tvApi} from '../../api'
export default class extends React.Component {
    constructor(props) {
        super(props)
        const pathname = this.props.location.pathname
        this.state = {
            result : null,
            loading : true, 
            error : null,
            isMovie : pathname.includes("/movie/")
    
        }
    }

    componentDidMount() {
        this.showDetails()
    }
    async showDetails() {
        const id = this.props.match.params.id
        const parsedID = parseInt(id)
        
        if(isNaN (parsedID)) {
            return this.props.history.push('/')
        }
        let result = null;
        const {isMovie} = this.state
        
        try {
            if(isMovie) {
                const request = await movieApi.details(parsedID)
                result = request.data
            } else {
                const request = await tvApi.details(parsedID)
                result = request.data
            }
            
        } catch(e) {
            this.setState({
                error : "cant find information on detail"
            })
        } finally {
            this.setState({
                loading:false,
                result
            })
            console.log(result)
        }
    }
    render () {

        const {result, loading, error} = this.state
        return (
            <DetailPresenter
                result = {result}
                loading = {loading}
                error = {error}
            />
        )
    }
}

