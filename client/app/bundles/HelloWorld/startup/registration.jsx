import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import Defaults from '../components/Defaults';
import CategoriesList from '../components/CategoriesList';
import SubcategoriesList from '../components/SubcategoriesList';


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Defaults,
  CategoriesList,
  SubcategoriesList
});
