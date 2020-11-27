/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './apps/App';
import {name as appName} from './app.json';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';//바깥창 터치하면 메뉴닫히게 함

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
