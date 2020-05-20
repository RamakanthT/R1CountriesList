import React from 'react';
import "./CountriesHeader.scss";

function countryHeader(props){

    return(
        <div className="countryHeader">
            {props.buttons.map((button,index)=>{
                return <div key={index} className="countryHeader__wrapper">
                    <button className="button button--primary"
                    onClick={button.callback}>{button.text}</button>
                </div>
            })}
        </div>
    )
}

export default countryHeader;
