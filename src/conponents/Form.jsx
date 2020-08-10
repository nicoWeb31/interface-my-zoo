import React from 'react';
import { withFormik } from "formik";
import * as yup from "yup";


const Form = (props) => (


    <>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nom :</label>
                <input type="text" className="form-control" id="nom" aria-describedby="emailHelp" placeholder="Votre Nom "
                    name="nom"
                    onChange={props.handleChange}
                    value={props.values.nom}
                    onBlur={props.handleBlur}
                />
                {
                    props.errors.nom && props.touched.nom &&
                    <small id="emailHelp" className="form-text bg-danger text-white">{props.errors.nom}</small>

                }
            </div>

            <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Votre Mail "
                    name="email"
                    onChange={props.handleChange}
                    value={props.values.email}
                    onBlur={props.handleBlur}
                />

                {
                    props.errors.email && props.touched.email &&
                    <small id="emailHelp" className="form-text bg-danger text-white">{props.errors.email}</small>

                }


            </div>

            <div className="form-group">
                <label htmlFor="message">Votre Message ?</label>
                <textarea className="form-control" id="message" rows="3"
                    name="message"
                    onChange={props.handleChange}
                    value={props.values.message}
                    onBlur={props.handleBlur}
                ></textarea>

                {
                    props.errors.message && props.touched.message &&
                    <small id="emailHelp" className="form-text bg-danger text-white">{props.errors.message}</small>

                }
            </div>

            <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>Envoyer</button>
        </form>


    </>
);

export default withFormik({
    mapPropsToValues: () => ({
        nom: "",
        email: "",
        message: ""
    }),
    validationSchema: yup.object().shape({
        nom: yup.string()
            .min(5, "le nom de doit avoir au moins 5 caractére")
            .required("le noms est obligatoire !"),
        email: yup.string()
            .email("l'email n'est pas au bon format")
            .required("l'email est obligatoire !"),
        message: yup.string()
            .min(50, "le message doit faire au moins 50 caractéres !")
            .max(500, "message trop long")
            .required("le message est obligatoire !")

    }),
    handleSubmit: (values,{props}) => {
        const message = {
            nom: values.nom,
            email: values.email,
            message: values.message
        }
        props.sendMail(message)
    }    

})(Form);