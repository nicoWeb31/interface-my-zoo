import React, { Component } from 'react';
import TitreHOne from "../../../conponents/Titres/TitreHOne";
import Form from "../../../conponents/Form"

class Contact extends Component {
    state = {  }


    componentDidMount(){
        document.title = "Page de Contact"
    }

    render() {
        return (
            <div>
                <TitreHOne bgColor="primary"> Contactez nous ! </TitreHOne>
                <div className="container">
                    <h2>Adresse</h2>
                    <p>xxxxxxxx</p>

                    <h2>Télephone</h2>
                    <p>xxxxxxxxxxx</p>

                    <h3>Vous prefére nous ecrire ?</h3>


                    <Form></Form>

                </div>
            </div>
        );
    }
}

export default Contact;