import CONFIG from '../../config/Config';

function _initCountries(context){
    fetch(CONFIG.api).then((resp) => resp.json()).then(function(data){
        context.setState((state) => ( {
            allCountries : data,
            visibleCountries: data.slice(0,state.countriesVisibleOnLoad)
        }));
    })
    .catch(function(error){
        console.error(error);
        context.setState((state) => ({countryListError: true}));
    });

    // if(this.props.location.pathname.length > 1){
    //     setSelectedCountryFullNames(this, this.props.location.pathname.slicea4t6v)
    // }

}

function loadMoreCountries(context){
    console.log("LOAD...");

    context.setState((state)=> ({
        visibleCountries: [...state.allCountries],
        countriesVisibleOnLoad: state.allCountries.length
    }));
}

function sortAlphabetically(context){
   
    context.setState((state)=>{

        let sortedList = [...state.allCountries];
        if(!state.countriesSortedAlph){
            sortedList.sort(function(a,b){return a.name> b.name?1:-1})
        }else{
            sortedList.sort(function(a,b){return a.name <= b.name?1:-1})
        }
    
        return{
            allCountries:sortedList,
            visibleCountries: sortedList.slice(0, state.countriesVisibleOnLoad),
            countriesSortedNum: undefined,
            countriesSortedAlph:!state.countriesSortedAlph,
            
        }
       })

}

function sortNumerically(context){
   context.setState((state)=>{

    let sortedList = [...state.allCountries];
    if(state.countriesSortedNum){
        sortedList.sort(function(a,b){return a.population - b.population})
    }else{
        sortedList.sort(function(a,b){return b.population - a.population})
    }

    return{
        allCountries:sortedList,
        visibleCountries: sortedList.slice(0, state.countriesVisibleOnLoad),
        countriesSortedNum:!state.countriesSortedNum,
        countriesSortedAlph : undefined
    }
   })
}

export{
    _initCountries,
    loadMoreCountries,
    sortNumerically,
    sortAlphabetically
}
