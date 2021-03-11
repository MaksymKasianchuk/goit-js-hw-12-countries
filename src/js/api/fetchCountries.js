
    function fetchCountries(searchQuery) {
        const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    
        return fetch(url).then(rawData => {if(rawData.ok) return rawData.json()});
      }
    
    export default fetchCountries;