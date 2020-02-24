import * as React from 'react';
import {View, Image, TouchableOpacity, Alert, Dimensions} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import {OrderListStyle as style} from './orderListStyle';
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
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import requestHttp from '../../utils/request';
import Loading from '../../components/loading/loading';
const FirstRoute = () => <View style={{backgroundColor: '#ff4081'}} />;

const SecondRoute = () => <View style={{backgroundColor: '#673ab7'}} />;
import OrderFirstContent from './orderFirstContent';
function OrderList(props) {
  console.log(props.route.params.index);
  const navigation = useNavigation();
  const route = useRoute();
  const userId = useSelector(state => state.User.userId);
  const [index, setIndex] = React.useState(route.params.index);
  // const [status, setStatus] = React.useState(route.params.status);
  const [orderData, setOrderData] = React.useState([]);
  const [routes] = React.useState([
    {key: 'first', title: '全部'},
    {key: 'second', title: '待付款'},
    {key: 'third', title: '待发货'},
    {key: 'fourth', title: '待收货'},
    {key: 'fifth', title: '已完成'},
  ]);
  const renderScene = SceneMap({
    first: () => <OrderFirstContent data={orderData} />,
    second: () => <OrderFirstContent data={orderData} />,
    third: () => <OrderFirstContent data={orderData} />,
    fourth: () => <OrderFirstContent data={orderData} />,
    fifth: () => <OrderFirstContent data={orderData} />,
  });
  React.useEffect(() => {
    setOrderData([]);
    if (index === 0) {
      initData(index);
    } else {
      initData(index + 1);
    }
  }, [index]);
  let initData = async status => {
    props.settingLoading();
    await requestHttp('/get_order_list', 'post', {
      userId,
      status,
    })
      .then(res => {
        console.log(res);
        setOrderData(res.data.orderList);
      })
      .catch(err => {
        console.log(err);
      });

    props.settingLoading();
  };
  let initTabBar = props => {
    console.log(props, 'props');
    return (
      <TabBar
        {...props}
        scrollEnabled={true}
        indicatorStyle={{
          backgroundColor: '#000',
        }}
        style={{
          backgroundColor: '#fff',
          shadowOffset: {height: 0, width: 0},
          shadowColor: 'transparent',
          shadowOpacity: 0,
          elevation: 0,
        }}
        getLabelText={({route}) => route.title}
        renderLabel={({route, focused, color}) => {
          return (
            <Text style={{color, fontWeight: focused ? 'bold' : 'normal'}}>
              {route.title}
            </Text>
          );
        }}
        tabStyle={{
          width: 80,
        }}
        activeColor={'#000'}
        inactiveColor={'#000'}
        lazy={true}
        renderLazyPlaceholder={null}
      />
    );
  };
  return (
    <Container style={{backgroundColor: '#f1f1f1'}}>
      <HeaderComponent
        title="KOK鲜花"
        button={true}
        leftIcon={'arrow-back'}
        leftFn={() => {
          navigation.goBack();
        }}
      />
      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        onIndexChange={index => setIndex(index)}
        initialLayout={{width: Dimensions.get('window').width}}
        // lazy={true}
        renderTabBar={props => initTabBar(props)}
      />
    </Container>
  );
}
export default Loading(OrderList);
