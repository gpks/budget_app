import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import Defaults from '../components/Defaults';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Defaults
});
