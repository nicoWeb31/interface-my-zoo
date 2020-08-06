import React, { Component } from 'react';

const TitreHOne = (props) => {

    let bgColor = props.bgColor ? props.bgColor : "primary"; 
    let monCss = ` border border-dark  p-2 text-white text-center  bg-${bgColor}`;


    return (


        <h1 className={monCss}>{props.value}</h1>

    )

}

export default TitreHOne;