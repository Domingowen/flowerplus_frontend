import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import {PersonDetailStyle as style} from './personDetailStyle';
import HeaderComponent from '../../components/header/header';
import {
  Container,
  Header,
  Body,
  Title,
  Left,
  Right,
  Button,
  Content,
  Segment,
  Tabs,
  Tab,
  ListItem,
  Thumbnail,
  Footer,
} from 'native-base';
import Modal from 'react-native-modal';
import Icon from '../../iconfont/Icon';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import requestHttp from '../../utils/request';
function PersonDetail() {
  const navigation = useNavigation();
  return (
    <Container>
      <HeaderComponent
        title="SN-FLOWER"
        button={true}
        leftIcon={'arrow-back'}
        leftFn={() => {
          navigation.goBack();
        }}
      />
    </Container>
  );
}
export default PersonDetail;
