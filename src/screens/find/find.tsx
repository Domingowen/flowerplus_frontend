import * as React from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import {FindStyle as style} from './findStyle';
import HeaderComponent from '../../components/header/header';
import {
  Container,
  Header,
  Body,
  Title,
  Left,
  Right,
  Button,
  Icon,
  Content,
  Text,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';
// import IconFont from '../../utils/iconSet';
function Find() {
  return (
    <Container style={{backgroundColor: '#f1f1f1'}}>
      <HeaderComponent title="KOK鲜花" />
      <Content>
        <TouchableOpacity
          style={style.gallery}
          onPress={() => {
            Alert.alert(
              'yabo flower 提示',
              '社区还在筹备中，敬请期待',
              [{text: '确定', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
          }}>
          <ImageBackground
            source={require('../../assets/forum.png')}
            style={style.image}
            resizeMode={'contain'}>
            <Text style={style.text}>社区</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.gallery}
          onPress={() => {
            Alert.alert(
              'yabo flower 提示',
              '社区还在筹备中，敬请期待',
              [{text: '确定', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
          }}>
          <ImageBackground
            source={require('../../assets/flower_conservation.png')}
            style={style.image}
            resizeMode={'contain'}>
            <Text style={style.text}>鲜花养护</Text>
          </ImageBackground>
        </TouchableOpacity>
      </Content>
    </Container>
  );
}
export default Find;
