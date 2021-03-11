import fetchCountries from '../api/fetchCountries';
import notifications from '../notyfications';
import refs from '../refs';
import debounce from 'lodash.debounce';
import createCountriesMarkup from '../markup';

const { errorNotif, emptyNotif,} = notifications;
const { inputRef, countryListRef } = refs;
  
inputRef.addEventListener('input', debounce(requestCountries, 1000));
countryListRef.addEventListener('click', showSelectedCountry);
function requestCountries() {
    countryListRef.innerHTML = '';
    const searchQuery = inputRef.value;
    if (!searchQuery) {
        emptyNotif();
        return;
    }
    fetchCountries(searchQuery).then(createCountriesMarkup).catch(errorNotif);
}
function showSelectedCountry(event){
    const searchQuery = event.target.textContent;
    fetchCountries(searchQuery).then(createCountriesMarkup).catch(errorNotif);
    inputRef.value = '';
    countryListRef.innerHTML = '';
}