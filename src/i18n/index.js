import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from './en.json';
import fr from './fr.json';
import es from './es.json';

addMessages('en', en);
addMessages('fr', fr);
addMessages('fr-FR', fr);
addMessages('fr-CA', fr);
addMessages('es', es);
addMessages('es-MX', es);

console.log(getLocaleFromNavigator());

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator()
});

