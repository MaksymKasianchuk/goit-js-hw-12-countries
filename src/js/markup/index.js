import countryCardTemplate from '../../templates/countryCard.hbs';
import countryListTemplate from '../../templates/countriesList.hbs';

import notifications from '../notyfications';
import refs from '../refs';

const { countryListRef } = refs;
const { succsessNotif, accurateNotif } = notifications;

function createCountriesMarkup(countriesArr){
    let markupTemp;
    if (countriesArr.length > 10) {
        accurateNotif();
        return;
    }
    if (countriesArr.length >= 2 && countriesArr.length <= 10) {
        markupTemp = countryListTemplate(countriesArr);
    }
    if (countriesArr.length === 1) {
        markupTemp = countryCardTemplate(...countriesArr);
        succsessNotif();
    }
    return countryListRef.insertAdjacentHTML('afterbegin', markupTemp);
}
export default createCountriesMarkup;

