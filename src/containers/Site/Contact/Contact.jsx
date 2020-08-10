import React, { Component } from 'react';
import TitreHOne from "../../../conponents/Titres/TitreHOne";
import Form from "../../../conponents/Form";
import axios from "axios"

class Contact extends Component {
    state = {  }


    componentDidMount(){
        document.title = "Page de Contact"
    }

    handeleMessage = (message) =>{
        axios.post('http://localhost/php-api/front/contact',message)
        .then(resp =>{
            console.log(resp)
        })
        .catch(err =>{
            console.log(err)
        })


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


                    <Form sendMail={this.handeleMessage}/>

                </div>
            </div>
        );
    }
}

export default Contact;