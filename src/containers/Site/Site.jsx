import React, { Component } from 'react';
import NavBar from '../../conponents/NavBar';
import {Switch, Route} from "react-router-dom";
import Acceuil from "./Acceuil/Acceuil";
import Contact from "./Contact/Contact";
import Error from "../../conponents/error/Error";
import Footer from "../../conponents/Footer"

class Site extends Component {

    render() {
        return (
            <>

            <div className="_site">

                <NavBar/>
                <Switch>

                    <Route path = "/" exact render={()=> <Acceuil/>}/>
                    <Route path = "/contact" exact render={()=> <Contact/>}/>
                    <Route render={()=> <Error type="404"/>}/>


                </Switch>
                <div className="_minSite">

                </div>

            </div>

                <Footer/>

            </>
        );
    }
}

export default Site;