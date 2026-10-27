const CONFIG =  {
    //restcountries.eu is offline and restcountries.com now needs an API key, so the list is served from public/countries.json
    "api": `${process.env.PUBLIC_URL}/countries.json`
}

export default CONFIG;