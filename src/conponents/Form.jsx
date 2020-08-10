import React from 'react';
import {withFormik} from "formik";
import * as yup from "yup";


const Form = (props) => (


    <>
        <form>
            <div className="form-group">
                <label htmlfor="exampleInputEmail1">Nom :</label>
                <input type="text" className="form-control" id="nom" aria-describedby="emailHelp" placeholder="Votre Nom " 
                    name="nom"
                    onChange={props.handleChange}
                    value={props.values.nom}
                />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>

            <div className="form-group">
                <label htmlfor="email">Email :</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Votre Mail " 
                name="email"
                onChange={props.handleChange}
                value={props.values.email}

                />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>

            <div className="form-group">
                <label htmlfor="message">Votre Message ?</label>
                <textarea className="form-control" id="message" rows="3"
                name="message"
                onChange={props.handleChange}
                value={props.values.message}
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>Envoyer</button>
        </form>


    </>
);

export default withFormik({
    mapPropsToValues : ()=>({
        nom:"",
        email:"",
        message:""
    }),
    validationSchema: yup.object().shape({

    }),
    handleSubmit: (value)=>{
        alert('message envoyé');
    }
})(Form);