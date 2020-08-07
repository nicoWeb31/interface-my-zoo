import React, { Component } from 'react';
import Button from "../../../conponents/Button"

class Animal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (

            <>

                <div className="card text-white bg-secondary mb-3" style={{ "max-width": "20rem", "heigth": "150px" }}>
                    <div className="card-header">
                        <h3 className="text-center">{this.props.data.nom}</h3>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.data.description}</h4>
                        <div className="text-center" style={{ "heigth": "100px" }}>
                            <img src={this.props.data.image} alt={this.props.data.nom} className="img-fluid h-100" />
                        </div>
                        <div className="card-body">
                            <Button typeBtn="primary" ><h3>Famille :</h3></Button>
                            <div className="alert alert-success">

                                <span>{this.props.data.famille.libelleFamille}</span>
                                <p>{this.props.data.famille.DescFamille}</p>
                            </div>

                        </div>
                        <div className="card-body">
                            <h3>Continent :</h3>
                            <div className="">
                                {
                                    this.props.data.continents.map(continent =>{
                                        let colorBtn = "";
                                        switch(continent.idContinent){
                                            case "euro" : colorBtn = "danger";
                                            break;
                                            case "afric" : colorBtn = "warning";
                                            break;
                                            case "ameri" : colorBtn = "secondary";
                                            break;
                                            case "asie" : colorBtn = "info";
                                            break;
                                            case "oceani" : colorBtn = "primary";
                                            break;
                                            default: colorBtn = "primary";
                                        }
                                        return <Button typeBtn={colorBtn} key={continent.idContinent} css="m-1">{continent.continentLibelle}</Button>
                                    })
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Animal;