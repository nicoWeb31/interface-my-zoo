import React, { Component } from 'react';
import TitreHone from "../../../conponents/Titres/TitreHOne";
import banderole from "../../../assets/img/banderole.png";
import logo from "../../../assets/img/logo.png";


class Acceuil extends Component {

    componentDidMount(){
        document.title = "Park d'animaux Myzoo"
    }

    render() {
        return (
            <div>

                <img src={banderole} alt="banderole" className="img-fluid" />
                <TitreHone value="Park chez My-zoo" bgColor="secondary" />
                <div className="container">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eos quidem, expedita a iusto voluptatum autem, et dicta impedit hic beatae pariatur in. Dolorem dolor minima possimus eius veritatis quod?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eos quidem, expedita a iusto voluptatum autem, et dicta impedit hic beatae pariatur in. Dolorem dolor minima possimus eius veritatis quod?
                    </p>
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-md-6 p-3">
                            <img src={logo} alt="logo" className="img-fluid" />
                        </div>

                        <div className="col-12 col-md-6 p-3">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eos quidem, expedita a iusto voluptatum autem, et dicta impedit hic beatae pariatur in. Dolorem dolor minima possimus eius veritatis quod?
                    </p>
                        </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-md-6 p-3">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eos quidem, expedita a iusto voluptatum autem, et dicta impedit hic beatae pariatur in. Dolorem dolor minima possimus eius veritatis quod?
                    </p>
                        </div>
                        <div className="col-12 col-md-6 p-3">
                            <img src={logo} alt="logo" className="img-fluid" />
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Acceuil;