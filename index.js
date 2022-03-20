/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './scr/App';
import {name as appName} from './app.json';

// import configureStore from './redux/store';
// import { Provider } from 'react-redux';

// const store = configureStore();

// const wrapWithRedux = () => {
//   <Provider store={store}>
//     <App />
//   </Provider>;
// };

AppRegistry.registerComponent(appName, () => App);
