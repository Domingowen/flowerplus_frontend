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
import {SafeAreaView} from 'react-native-safe-area-context';
import {OrderStyle as style} from './orderStyle';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
// import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
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
  Segment,
  Tabs,
  Tab,
  ListItem,
  Thumbnail,
  Footer,
  FooterTab,
} from 'native-base';
import HeaderComponent from '../../components/header/header';
import requestHttp from '../../utils/request';

function Order(props) {
  console.log(props, 'propsData');
  const navigation = useNavigation();
  const route = useRoute();
  const [use, setUse] = React.useState(0);
  const [orderData, setOrderData] = React.useState({});
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      requestHttp('/order/get', 'get', {
        orderId: route.params.orderId,
      })
        .then(res => {
          console.log(res);
          setOrderData(res.data.order);
        })
        .catch(err => {
          console.log(err);
        });
    });

    return unsubscribe;
  }, [navigation]);

  let submitOrder = () => {
    // 提交订单
    requestHttp('/order/modify', 'post', {
      orderId: route.params.orderId,
      status: 3,
    })
      .then(res => {
        console.log(res);
        navigation.navigate('Finish');
      })
      .catch(err => {
        console.log(err);
      });
  };
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
      <Content>
        <View style={style.orderContent}>
          <View style={style.orderLeft}>
            <Image
              source={{uri: orderData.pic}}
              style={{width: 70, height: 70}}
            />
            <View style={style.orderInfo}>
              <Text style={style.orderInfoTitle}>{orderData.title}</Text>
              {orderData.skuId &&
                orderData.skuId.skuPropertyName.split(';').map((val, index) => {
                  return (
                    <Text style={style.orderInfoProperty} key={index}>
                      {val}
                    </Text>
                  );
                })}
            </View>
          </View>
          <View style={style.orderRight}>
            <Text style={style.orderPrice}>¥ {orderData.price}</Text>
            <Text style={style.orderNumber}>x {orderData.number}</Text>
          </View>
        </View>
        <View style={style.orderTotal}>
          <Text style={style.orderTotalCount}>
            共 {orderData.number} 件商品
          </Text>
          <Text style={style.orderTotalCount}>¥ {orderData.totalPrice}</Text>
        </View>
        <TouchableOpacity
          style={style.orderListItems}
          onPress={() => {
            navigation.navigate('Address', {
              orderId: orderData._id,
            });
          }}>
          <Text style={style.orderListLeft}>收货地址</Text>
          <View style={style.orderListRight}>
            {orderData.addressId ? (
              <View>
                <Text style={{fontSize: 18, paddingRight: 10, color: '#999'}}>
                  {orderData.addressId.name} - {orderData.addressId.phone}
                </Text>
                <Text style={{fontSize: 18, paddingRight: 10, color: '#999'}}>
                  {orderData.addressId.address}
                </Text>
              </View>
            ) : (
              <Text style={{fontSize: 18, paddingRight: 10, color: '#999'}}>
                请选择地址
              </Text>
            )}
            <Icon name="arrow-forward" style={{fontSize: 22, color: '#ccc'}} />
          </View>
        </TouchableOpacity>
        <View style={style.orderUse}>
          <Text style={style.orderUseTitle}>购买用途</Text>
          <View style={style.orderUseItems}>
            <Text
              style={[
                use === 0 && style.orderUseItemSelect,
                style.orderUseItem,
              ]}
              onPress={() => {
                setUse(0);
              }}>
              居家
            </Text>
            <Text
              style={[
                use === 1 && style.orderUseItemSelect,
                style.orderUseItem,
              ]}
              onPress={() => {
                setUse(1);
              }}>
              办公室
            </Text>
            <Text
              style={[
                use === 2 && style.orderUseItemSelect,
                style.orderUseItem,
              ]}
              onPress={() => {
                setUse(2);
              }}>
              送礼
            </Text>
          </View>
         </View>
        <View style={style.orderListItems}>
          <Text style={style.orderListLeft}>支付方式</Text>
          <View style={style.orderListRight}>
            <Text style={{fontSize: 18, paddingRight: 10, color: '#999'}}>
              货到付款
            </Text>
            {/* <Icon name="arrow-forward" style={{fontSize: 22, color: '#ccc'}} /> */}
          </View>
        </View>
      </Content>
      <Footer style={style.orderFooter}>
        <FooterTab>
          <View style={style.orderFooterLeft}>
            <Text style={style.orderTotalText}>应付金额</Text>
            <Text style={style.orderTotalPrice}>¥ {orderData.totalPrice}</Text>
          </View>
          <TouchableOpacity style={style.buttonPayment} onPress={submitOrder}>
            <Text style={style.buttonPaymentText}>提交订单</Text>
          </TouchableOpacity>
        </FooterTab>
      </Footer>
    </Container>
  );
}
export default Order;
