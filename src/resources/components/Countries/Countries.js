import React from 'react';
import "./Countries.scss";
import countryCard from '../../views/countryCard/countryCard';
import {_initCountries, loadMoreCountries, sortNumerically, sortAlphabetically} from "./CountriesUtil.js";
import cData from "./Countries.json";
import countryHeader from '../../views/countryCard/CountriesHeader';
class Countries extends React.Component{

    loadMoreCountries = () => {loadMoreCountries(this)};

    constructor(){
        super();
        this.state = {
            "allCountries":[],
            "visibleCountries":[],
            "countriesVisibleOnLoad":10,
            "countryListError":false,
            "countriesSortedAlph":true,
            "countriesSortedNum":false,

            "buttons":[
                {
                    "text":"Sort A-Z",
                    "callback": ()=>sortAlphabetically(this)
                },
                {
                    "text":"Sort by Population",
                    'callback': ()=>sortNumerically(this)
                }
            ]
        }
        _initCountries(this);
        
    }



    render(){

        // console.log(this.state.allCountries);

        return(
            <section className="countries">
                <h1>{cData.title}</h1>
                {countryHeader({
                    buttons: this.state.buttons
                })
                }
                <div className="countries_country-list">
                { this.state.visibleCountries.map((country,index)=>{
                        return <React.Fragment key={index}>
                        {countryCard({
                            imgSrc: country.flag,
                            name: country.name,
                            population: country.population,
                            buttonText: "View",
                            callback: null
                            })
                        }
                        </React.Fragment>
                    })
                }  
                {this.state.allCountries.length > this.state.visibleCountries.length && (
                <button className="button button--primary button--load"
                onClick={this.loadMoreCountries}>{cData.loadButtonText}</button>
                )}
                </div>
                   
            </section>

        )

    }
}

export default Countries;