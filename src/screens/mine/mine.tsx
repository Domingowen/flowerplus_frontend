import * as React from 'react';
import {View, Image, TouchableOpacity, Alert} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import {MineStyle as style} from './mineStyle';
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
  Text,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';
import Icon from '../../iconfont/Icon';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Logiispatch,
  SettingUserDispatch,
  LogoutDispatch,
} from '../../redux/actions';
// import IconFont from '../../utils/iconSet';

function Mine() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.User.token);
  const user = useSelector(state => state.User.user);
  let personHandle = () => {
    if (token) {
      // navigation.navigate('PersonDetail');
      Alert.alert('提示', '是否要退出登录', [
        {
          text: '取消',
        },
        {
          text: '确定',
          onPress: () => {
            dispatch(LogoutDispatch());
          },
        },
      ]);
    } else {
      navigation.navigate('Login');
    }
  };
  let orderList = (index: number) => {
    if (token) {
      navigation.navigate('OrderList', {
        index,
      });
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <Container>
      <HeaderComponent title="SN-FLOWER" />

      <Content>
        <View>
          <Image
            source={require('../../assets/mine-bg.png')}
            style={style.bgImg}
          />
          <View style={style.header}>
            <View style={style.avatarContainer}>
              <TouchableOpacity onPress={personHandle}>
                <Image
                  source={require('../../assets/avatar.jpg')}
                  style={style.avatar}
                />
              </TouchableOpacity>

              <Text style={style.avatarText}>
                {token ? user.username : '未登录'}
              </Text>
            </View>
            <View style={style.statusList}>
              <TouchableOpacity
                style={style.statusIcon}
                onPress={() => orderList(1)}>
                <Icon name={'daifukuan'} size={30} />
                <Text>待付款</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.statusIcon}
                onPress={() => orderList(2)}>
                <Icon name={'daifahuo'} size={30} />
                <Text>待发货</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.statusIcon}
                onPress={() => orderList(3)}>
                <Icon name={'daishouhuo'} size={30} />
                <Text>待收货</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.statusIcon}
                onPress={() => orderList(4)}>
                <Icon name={'yiwancheng'} size={30} />
                <Text>已完成</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => orderList(0)}>
              <Text style={{textAlign: 'center', fontSize: 14}}>全部订单></Text>
            </TouchableOpacity>
          </View>
          <View style={style.bottom}>
            <View style={style.myServices}>
              <Text style={style.bottomTitle}>我的服务</Text>
              <View style={style.bottomContent}>
                <TouchableOpacity
                  style={style.bottomItems}
                  onPress={() => {
                    if (token) {
                      navigation.navigate('Coupon');
                    } else {
                      navigation.navigate('Login');
                    }
                  }}>
                  <Icon name={'youhuiquan'} size={30} />
                  <Text>我的优惠券</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={style.bottomItems}
                  onPress={() => {
                    if (token) {
                      navigation.navigate('Address');
                    } else {
                      navigation.navigate('Login');
                    }
                  }}>
                  <Icon name={'dizhi'} size={30} />
                  <Text>我的地址</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
}
export default Mine;
