import * as React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
  ScrollView,
} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import {OrderFirstContentStyle as style} from './orderFirstContentStyle';
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
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import requestHttp from '../../utils/request';
function OrderFirstContent(props) {
  console.log('props', 'orderList');
  let statusText = {
    2: '待付款',
    3: '待发货',
    4: '待收货',
    5: '待评价',
  };
  let btnHandle = (id, status, text) => {
    requestHttp('/order/modify', 'post', {
      orderId: id,
      status,
    })
      .then(res => {
        console.log(res);
        Alert.alert('提示', text, [
          {
            text: '确定',
            onPress: () => console.log('Cancel Pressed'),
          },
        ]);
        // navigation.navigate('Finish');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return props.data.length > 0 ? (
    <View style={{backgroundColor: '#f1f1f1'}}>
      <ScrollView>
        {props.data.map((val, index) => {
          return (
            <View style={style.container} key={index}>
              <View style={style.header}>
                {/* <Text>2020-02-04 22:02:03</Text> */}
                <Text>{statusText[val.status]}</Text>
              </View>
              <View style={style.content}>
                <View>
                  <Image source={{uri: val.pic}} style={style.image} />
                </View>
                <View style={style.detail}>
                  <Text style={style.detailTitle}>{val.title}</Text>
                  <Text style={style.detailDescription}>
                    {val.skuId && val.skuId.skuPropertyName}
                  </Text>
                </View>
              </View>
              <View style={style.count}>
                <Text>共{val.number}件商品</Text>
                <Text>实付:¥ {val.totalPrice}</Text>
              </View>
              <View style={style.btn}>
                <TouchableOpacity
                  style={style.btnItem}
                  onPress={() => btnHandle(val._id, 6, '取消订单成功')}>
                  <Text style={style.btnText}>取消订单</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={style.btnItem}
                  onPress={() => btnHandle(val._id, 5, '确认收货成功')}>
                  <Text style={style.btnText}>确认收货</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  ) : (
    <View
      style={{height: '80%', alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../../assets/emptyOrder.png')}
          style={{ width: 100, height: 100 }}
          resizeMode={'contain'}
      />
      <Text>当前无订单信息</Text>
    </View>
  );
}
export default OrderFirstContent;
