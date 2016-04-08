'use strict';

import React, {AppRegistry, Platform} from 'react-native';
import App from './index';

AppRegistry.registerComponent('NimFinderRedux', () => App);

if (Platform.OS == 'web') {
    AppRegistry.runApplication('NimFinderRedux', {
        rootTag: document.getElementById('root')
    });
}
