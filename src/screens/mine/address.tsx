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
import {AddressStyle as style} from './addressStyle';
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
  CheckBox,
  FooterTab,
} from 'native-base';
import HeaderComponent from '../../components/header/header';
import requestHttp from '../../utils/request';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AddAddress from './addAddress';
function Address() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const userId = useSelector(state => state.User.userId);
  const [address, setAddress] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  console.log(route);
  // React.useEffect(() => {
  //   requestHttp(`/get_address_list?userId=5e0f188bea7af27c4666a68e`, 'get')
  //     .then(res => {
  //       console.log(res);
  //       setAddress(res.data.address);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);
  let init = () => {
    requestHttp(`/get_address_list`, 'get', {
      userId,
    })
      .then(res => {
        console.log(res);
        setAddress(res.data.address);
      })
      .catch(err => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    init();
  }, [modal]);
  let changeDefaultAddress = addressId => {
    requestHttp('/default_address', 'post', {
      userId,
      addressId,
    })
      .then(res => {
        console.log(res);
        init();
      })
      .catch(err => {
        console.log(err);
      });
  };
  let settingOrderAddress = addressId => {
    requestHttp('/order/address', 'post', {
      addressId,
      orderId: route.params.orderId,
    })
      .then(res => {
        console.log(res);
        navigation.goBack();
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
        {address.map((val, index) => {
          return (
            <ListItem
              key={index}
              onPress={() => {
                route.params && settingOrderAddress(val._id);
              }}>
              <Body>
                <Text>
                  {val.name} {val.phone} {val.address} {val.detail}
                </Text>
              </Body>
              <Right>
                <CheckBox
                  checked={val.default}
                  onPress={() => {
                    changeDefaultAddress(val._id);
                  }}
                />
              </Right>
            </ListItem>
          );
        })}
      </Content>
      <Footer
        style={{
          width: '100%',
          backgroundColor: '#fff',
          borderTopWidth: 0,
          borderTopColor: '#fff',
        }}>
        <Button
          onPress={() => setModal(true)}
          style={{
            width: '80%',
            justifyContent: 'center',
            backgroundColor: '#FC557D',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
            }}>
            添加新地址
          </Text>
        </Button>
      </Footer>
      <AddAddress
        isVisible={modal}
        close={() => {
          setModal(false);
        }}
      />
    </Container>
  );
}
export default Address;
