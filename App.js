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
import SplashScreen from 'react-native-splash-screen';
// const codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
let codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_START};
enableScreens();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    // CodePush.checkForUpdate().then(update => {
    //   console.log(update);
    //   if (!update) {
    //     console.log('The app is up to date!');
    //   } else {
    //     console.log('An update is available! Should we download it?');
    //   }
    //   CodePush.sync({
    //     updateDialog: false,
    //     installMode: CodePush.InstallMode.IMMEDIATE,
    //   });

    // });
    CodePush.checkForUpdate('H8XgYm80Hb_E8o99sXFElpRgTiTch2wn3kpSj').then(
      update => {
        console.log(update);
        if (!update) {
          console.log('The app is up to date!');
        } else {
          console.log('An update is available! Should we download it?');
        }
      },
    );
    // CodePush.sync({
    //   deploymentKey: 'H8XgYm80Hb_E8o99sXFElpRgTiTch2wn3kpSj',
    //   updateDialog: false,
    //   installMode: CodePush.InstallMode.IMMEDIATE,
    // });
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootRouter />
      </SafeAreaProvider>
    </Provider>
  );
};
export default CodePush(codePushOptions)(App);
