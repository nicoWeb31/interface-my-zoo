import React, { Component } from 'react';
import NavBar from '../../conponents/NavBar';
import {Switch, Route} from "react-router-dom";
import Acceuil from "./Acceuil/Acceuil";
import Contact from "./Contact/Contact";
import Error from "../../conponents/error/Error"

class Site extends Component {

    render() {
        return (
            <>
                <NavBar/>
                <Switch>

                    <Route path = "/" exact render={()=> <Acceuil/>}/>
                    <Route path = "/contact" exact render={()=> <Contact/>}/>
                    <Route render={()=> <Error type="404"/>}/>


                </Switch>


            </>
        );
    }
}

export default Site;