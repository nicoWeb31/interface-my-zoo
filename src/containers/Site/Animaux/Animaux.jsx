import React, { Component } from 'react';
import TitreHone from '../../../conponents/Titres/TitreHOne';
import axios from "axios";

class Animaux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animaux : null
        };


        
    }
    
    componentDidMount = () => {
        axios.get("http://localhost/php-api/front/animaux")
        .then(response => {
            this.setState ({animaux :response.data})
            
        })
    }


    render() {

        console.log(this.state.animaux)


        return (
            <>
            
                <TitreHone  value ="Les animaux du park" bgcolor="primary"/>
                <div className="container">
                    
                    <h3>page listant les animaux</h3>
                    {/* <div>
                        {
                            this.state.animaux && 
                            this.state.animaux.map(animal =>{
                                
                            })
                        }
                    </div> */}

                </div>
            </>
        );
    }
}

export default Animaux;