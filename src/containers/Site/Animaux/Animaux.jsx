import React, { Component } from 'react';
import TitreHone from '../../../conponents/Titres/TitreHOne';
import axios from "axios";
import Animal from "./Animal";
import Button from "../../../conponents/Button";


class Animaux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animaux: null,
            filtreFamille : null,
            filtreContinent : null,
            listeFamille: null,
            listeContinent : null
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

    loadFamille =() =>{

        axios.get(`http://localhost/php-api/front/familles`)
        .then(response => {
            this.setState({ listeFamille: Object.values(response.data) })

        })

    }


    componentDidMount = () => {
        this.loadData();
        this.loadFamille();


        axios.get(`http://localhost/php-api/front/continents`)
        .then(response => {
            this.setState({ listeContinent: Object.values(response.data) })

        })
    }

    componentDidUpdate =(oldProps,oldState)=>{
        if(oldState.filtreFamille !== this.state.filtreFamille || oldState.filtreContinent !== this.state.filtreContinent){

            this.loadData()

        }
    }




    handeleSelectionFamille = (idFamille) =>{
        console.log(`demande de ${idFamille}`);
        if(idFamille == null) this.handeleSelectionClearFam()
        else this.setState({filtreFamille : idFamille});

    }

    handeleSelectionContinet = (idcontinent) =>{
        console.log(`demande de ${idcontinent}`);
        if(idcontinent == null)this.handeleSelectionClearCont()
        else this.setState({filtreContinent : idcontinent});


    }

    handeleSelectionClearCont = () =>{
        this.setState({filtreContinent : null})
    }

    handeleSelectionClearFam = () =>{
        this.setState({filtreFamille : null})
    }

    selectFamilles = () =>{
        this.setState({animaux : this.state.listeFamille})
    }


    render() {

        console.log(this.state.animaux)


        return (
            <>

                <TitreHone value="Les animaux du park" bgcolor="primary" />
                
                <div className="container-fluid">
                    <span> Filtre :</span>

                    <select onChange={(e)=> this.handeleSelectionContinet(e.target.value)}>
                        <option value = ""
                        selected={this.state.filtreContinent === null ? "selected" : ""}
                        >continent</option>
                        {
                            this.state.listeContinent && this.state.listeContinent.map(cont =>{
                                return <option value={cont.continent}
                                selected={this.state.filtreContinent === cont.continent ? "selected" : ""}
                                >{cont.continent_libelle}</option>
                            })
                        }

                    </select>


                    <select onChange={(e)=> this.handeleSelectionFamille(e.target.value)}>
                        <option value = "">Familles</option>
                        {
                            this.state.listeFamille && this.state.listeFamille.map(fam =>{
                                return <option value={fam.famille_id}>{fam.famille_libelle}</option>
                            })
                        }

                    </select>

                {
                    this.state.filtreContinent &&
                    <Button typeBtn = "warning" 
                    click={this.handeleSelectionClear}>
                    <i className="fa fa-times" aria-hidden="true"></i> &nbsp;

                    {this.state.filtreContinent}
                    </Button>
                }
                {
                    this.state.filtreFamille &&
                    <Button typeBtn = "warning" 
                    click={this.handeleSelectionClear}>
                    <i className="fa fa-times" aria-hidden="true"></i> &nbsp;

                    {this.state.filtreFamille}
                    </Button>
                }


                </div>
                

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