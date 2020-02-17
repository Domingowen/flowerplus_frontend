import * as React from 'react';
import {View, Image} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import {CouponStyle as style} from './couponStyle';
import HeaderComponent from '../../components/header/header';
// import Icon from '../../iconfont/Icon';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

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
function Coupon() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <Container>
      <HeaderComponent
        title="SN-FLOWER"
        button={true}
        leftIcon={'arrow-back'}
        leftFn={() => {
          navigation.goBack();
        }}
        navigation={navigation}
      />
      <View
        style={{justifyContent: 'center', alignItems: 'center', height: '80%'}}>
        <Image
          source={require('../../assets/emptyCoupon.png')}
          style={{width: 100, height: 100, marginBottom: 20}}
        />
        <Text>当前没有优惠券哦</Text>
      </View>
    </Container>
  );
}
export default Coupon;
