import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Home from '../Routes/Home'
import TV from '../Routes/TV'
import Search from '../Routes/Search'
import Header from 'Components/Header/Header.js'
import Detail from '../Routes/Detail'

export default () => (
    <Router>
        <>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/TV" component={TV}/>
                {/* <Route path="/TV/popular" render={()=><h1>Popular</h1>}/> */}
                <Route path="/Search" component={Search}/>
                <Route path="/Movie/:id" component={Detail}/>
                <Route path="/Show/:id" component={Detail}/> 
                <Redirect from="*" to="/" />
                
            </Switch>
        </>
    </Router>
)