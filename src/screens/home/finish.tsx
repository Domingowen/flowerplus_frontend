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
import {FinishStyle as style} from './finishStyle';
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

function Finish() {
  const navigation = useNavigation();
  const route = useRoute();
  const [use, setUse] = React.useState(0);
  const [orderData, setOrderData] = React.useState({});
  const userId = useSelector(state => state.User.userId);
  return (
    <Container>
      <HeaderComponent title="SN-FLOWER" />
      <View style={style.container}>
        <Image
          source={require('../../assets/paymentSuccess.png')}
          style={style.tipsImage}
        />
        <Text style={style.title}>订单提交成功</Text>
        <Text style={style.tips}>快递送上门之后再付现金哦</Text>
        <Button
          full
          style={style.button}
          onPress={() => {
            navigation.popToTop();
          }}>
          <Text style={{color: '#fff'}}>我知道了</Text>
        </Button>
      </View>
    </Container>
  );
}
export default Finish;
