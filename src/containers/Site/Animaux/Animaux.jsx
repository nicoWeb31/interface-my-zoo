import React, { Component } from 'react';
import TitreHone from '../../../conponents/Titres/TitreHOne';
import axios from "axios";
import Animal from "./Animal"

class Animaux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animaux: null
        };



    }

    componentDidMount = () => {
        axios.get("http://localhost/php-api/front/animaux")
            .then(response => {
                this.setState({ animaux: Object.values(response.data) })

            })
    }


    render() {

        console.log(this.state.animaux)


        return (
            <>

                <TitreHone value="Les animaux du park" bgcolor="primary" />
                <div className="container">

                    <h3 className="text-center">Page listant les animaux</h3>


                    <div className="row no-gutters">

                        {
                            this.state.animaux &&
                            this.state.animaux.map(animal =>

                                <div className="col-12 col-md-6 col-xl-4 p-3" key={animal.id}> 
                                    <Animal data={animal}  />
                                </div>
                            )
                        }


                    </div>
                </div>


            </>
        );
    }
}

export default Animaux;