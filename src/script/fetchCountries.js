const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default function getCountries (searchQuery) {
  const enteredCountry = baseUrl + searchQuery;
  return fetch (enteredCountry).then (response => {
    return response.json ();
  });
}
