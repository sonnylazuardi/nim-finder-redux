import React, {
  AppRegistry,
} from 'react-native';

import NimFinder from './src';

AppRegistry.registerComponent('NimFinder', () => NimFinder);

AppRegistry.runApplication('NimFinder', {
    rootTag: document.getElementById('root')
});
