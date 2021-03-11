import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';

defaults.delay = 3000;
defaults.styling = 'material';

const { alert, info, success, error } = require('@pnotify/core');
  function errorNotif() {
    error('No such country');
  }
  function succsessNotif() {
    success('We find it!!!');
  }
  function emptyNotif() {
      alert('Enter country name, please!');
  }
  function accurateNotif() {
    info('Need more symbols');
  }
  export default {
    errorNotif,
    succsessNotif,
    emptyNotif,
    accurateNotif,
  };