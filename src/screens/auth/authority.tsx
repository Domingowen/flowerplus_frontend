import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/core';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Container, Header, Body, Title} from 'native-base';
function AuthPage({navigation}: any) {
  setTimeout(() => {
    // navigation.dispatch(CommonActions.replace('TabHome'));
    navigation.reset({
      index: 0,
      routes: [{name: 'TabHome'}],
    });
  }, 1000);

  return <Container></Container>;
}
export default AuthPage;
