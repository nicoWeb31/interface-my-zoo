import React from 'react';


const Form = (prpos) => (


    <>
        <form>
            <div className="form-group">
                <label htmlfor="exampleInputEmail1">Nom :</label>
                <input type="text" className="form-control" id="nom" aria-describedby="emailHelp" placeholder="Votre Nom " />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>

            <div className="form-group">
                <label htmlfor="email">Email :</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Votre Mail " />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>

            <div className="form-group">
                <label htmlfor="message">Votre Message ?</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>


    </>
);

export default Form;