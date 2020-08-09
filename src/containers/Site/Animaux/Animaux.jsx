import React, { Component } from 'react';
import TitreHone from '../../../conponents/Titres/TitreHOne';
import axios from "axios";
import Animal from "./Animal";
import Button from "../../../conponents/Button"

class Animaux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animaux: null,
            filtreFamille : null,
            filtreContinent : null
        };



    }

    loadData = () =>{
        const continent = this.state.filtreContinent ? this.state.continent : "";
        const famille = this.state.filtreFamille ? this.state.filtreFamille : "";

        if(this.state.filtreContinent && this.state.filtreFamille){

            const continent = 
            this.state.filtreContinent ? this.state.filtreContinent : "";

            const famille = 
            this.state.filtreFamille ? this.state.filtreFamille : "";

            axios.get(`http://localhost/php-api/front/animaux/${continent}/${famille}`)
            .then(response => {
                this.setState({ animaux: Object.values(response.data) })
    
            })

        }else if(this.state.filtreContinent){

            const continent = 
            this.state.filtreContinent ? this.state.filtreContinent : "";
            axios.get(`http://localhost/php-api/front/animaux/${continent}`)
            .then(response => {
                this.setState({ animaux: Object.values(response.data) })
    
            })

        }else{
            axios.get(`http://localhost/php-api/front/animaux`)
            .then(response => {
                this.setState({ animaux: Object.values(response.data) })
    
            })
        }

    }

    componentDidMount = () => {
        this.loadData();
    }

    componentDidUpdate =(oldProps,oldState)=>{
        if(oldState.filtreFamille !== this.state.filtreFamille || oldState.filtreContinent !== this.state.filtreContinent){

            this.loadData()

        }
    }




    handeleSelectionFamille = (idFamille) =>{
        console.log(`demande de ${idFamille}`)
        this.setState({filtreFamille : idFamille})

    }

    handeleSelectionContinet = (idcontinent) =>{
        console.log(`demande de ${idcontinent}`)
        this.setState({filtreContinent : idcontinent})


    }

    handeleSelectionClear = () =>{
        this.setState({filtreContinent : null,filtreFamille : null})
    }


    render() {

        console.log(this.state.animaux)


        return (
            <>

                <TitreHone value="Les animaux du park" bgcolor="primary" />
                {
                    (this.state.filtreContinent || this.state.filtreFamille) && <span> Filtre :</span>
                }
                {
                    this.state.filtreContinent &&
                    <Button typeBtn = "warning" click={this.handeleSelectionClear}>{this.state.filtreContinent}</Button>
                }
                {
                    this.state.filtreFamille &&
                    <Button typeBtn = "warning" click={this.handeleSelectionClear}>{this.state.filtreFamille}</Button>
                }

                <div className="container">

                    <h3 className="text-center">Page listant les animaux</h3>


                    <div className="row no-gutters">

                        {
                            this.state.animaux &&
                            this.state.animaux.map(animal =>

                                <div className="col-12 col-md-6 col-xl-4 p-3" key={animal.id}> 
                                    <Animal data={animal}  selecFamille ={this.handeleSelectionFamille} selectContinent = {this.handeleSelectionContinet}/>
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