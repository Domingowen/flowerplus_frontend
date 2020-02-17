import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useScreens, enableScreens} from 'react-native-screens';

import CodePush from 'react-native-code-push';

import RootRouter from './src/route/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/redux/index';
// import {PersistGate} from 'redux-persist/integration/react';

const codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};
enableScreens();
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootRouter />
      </SafeAreaProvider>
    </Provider>
  );
};
export default CodePush(codePushOptions)(App);
