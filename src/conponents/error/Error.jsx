import React from 'react';
import TitreHone from '../Titres/TitreHOne'

const Error = (props) => (
    <>
        <TitreHone value ={ "Error " + props.type} bgColor="danger"/>
    </>
);

export default Error;