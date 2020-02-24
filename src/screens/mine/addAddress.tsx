import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Picker,
} from 'react-native';
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
  Icon,
  ListItem,
  Thumbnail,
  Footer,
  Item,
  Label,
  CheckBox,
  Input,
} from 'native-base';
import Modal from 'react-native-modal';
import IconFont from '../../iconfont/Icon';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AddAddressStyle as style} from './addAddressStyle';
import requestHttp from '../../utils/request';
import HeaderComponent from '../../components/header/header';
import CustomizePicker from '../../components/picker/customizePicker';
import axios from 'axios';

function AddAddress(props) {
  const navigation = useNavigation();
  const [province, setProvince] = React.useState([]);
  const [city, setCity] = React.useState([]);
  const [county, setCounty] = React.useState([]);
  const [pickerData, setPickerData] = React.useState([]);
  const [address, setAddress] = React.useState([]);
  const [addressCode, setAddressCode] = React.useState([]);
  const [visible, setVisible] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [detail, setDetail] = React.useState('');
  const [defaultData, setDefault] = React.useState(false);
  const userId = useSelector(state => state.User.userId);
  React.useEffect(() => {
    selectProvince();
  }, []);
  React.useEffect(() => {
    setVisible(false);
    setAddress([]);
  }, [props.isVisible]);
  React.useEffect(() => {
    console.log(province, 'province');
    if (province.length > 0) {
      addressCode.length <= 0
        ? selectCity(
            province[0].statistical_code
              ? province[0].statistical_code
              : '110000000000',
          )
        : selectCity(addressCode[0]);
      // addressCode.map()
      let newL = [];
      province.forEach((val, index) => {
        newL.push({label: val.name, value: val.statistical_code});
      });
      setPickerData(prevState => {
        prevState.splice(0, 1, newL);
        return prevState;
      });
    }
  }, [province]);
  React.useEffect(() => {
    if (city.length > 0) {
      addressCode.length <= 0
        ? selectCounty(
            city[0].statistical_code
              ? city[0].statistical_code
              : '110100000000',
          )
        : selectCounty(addressCode[1]);
      let newL = [];
      city.forEach((val, index) => {
        newL.push({label: val.name, value: val.statistical_code});
      });
      setPickerData(prevState => {
        prevState.splice(1, 1, newL);
        return prevState;
      });
    }
  }, [city]);

  React.useEffect(() => {
    if (county.length > 0) {
      let newL = [];
      county.forEach((val, index) => {
        newL.push({label: val.name, value: val.statistical_code});
      });
      setPickerData(prevState => {
        prevState.splice(2, 1, newL);
        return prevState;
      });
    }
  }, [county]);
  React.useEffect(() => {
    console.log(address, 'address data');
  }, [address]);

  let saveAddress = () => {
    requestHttp('/add_address', 'post', {
      address,
      detail: detail,
      name: name,
      phone: phone,
      areaCode: addressCode,
      userId,
      default: defaultData,
    })
      .then(res => {
        console.log(res);
        props.close();
      })
      .catch(err => {
        console.log(err);
      });
  };

  let selectProvince = async () => {
    await axios({
      method: 'get',
      url: 'https://pcctv.public.ty289.com/stats/province',
    })
      .then(res => {
        console.log(res);
        setProvince(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  let selectCity = async topCode => {
    await axios({
      method: 'get',
      url: `https://pcctv.public.ty289.com/stats/city?topCode=${topCode}`,
    })
      .then(async res => {
        console.log(res);
        setCity(res.data);
        setAddressCode(prevState => {
          prevState.splice(1, 1, res.data[0].statistical_code);
          return prevState;
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  let selectCounty = async topCode => {
    await axios({
      method: 'get',
      url: `https://pcctv.public.ty289.com/stats/county?topCode=${topCode}`,
    })
      .then(res => {
        console.log(res, 'county');
        setCounty(res.data);
        setAddressCode(prevState => {
          prevState.splice(2, 1, res.data[0].statistical_code);
          return prevState;
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Modal
      isVisible={props.isVisible}
      coverScreen={true}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      <Container>
        <HeaderComponent
          button={true}
          title={'KOK鲜花'}
          leftIcon={'arrow-back'}
          leftFn={() => props.close()}
          navigation={navigation}
        />
        <Content>
          {/* <TouchableOpacity
            style={{position: 'absolute', right: 10, top: -30, zIndex: 100}}
            onPress={() => props.close()}>
            <IconFont name={'guanbi1'} size={30} />
          </TouchableOpacity> */}
          <Item fixedLabel>
            <Label>收货人姓名</Label>
            <Input onChangeText={e => setName(e)} />
          </Item>
          <Item fixedLabel>
            <Label>联系方式</Label>
            <Input maxLength={11} onChangeText={e => setPhone(e)} />
          </Item>
          <TouchableOpacity
            style={style.orderListItems}
            onPress={() => {
              setVisible(true);
            }}>
            <Text style={style.orderListLeft}>省市级</Text>
            <View style={style.orderListRight}>
              <Text style={{fontSize: 16, paddingRight: 10, color: '#999'}}>
                {address.length > 0 ? address : '请选择'}
              </Text>
              <Icon
                name="arrow-forward"
                style={{fontSize: 22, color: '#ccc'}}
              />
            </View>
          </TouchableOpacity>
          <Item fixedLabel>
            <Label>详细地址</Label>
            <Input onChangeText={e => setDetail(e)} />
          </Item>
          <TouchableOpacity
            style={style.orderListItems}
            onPress={() => {
              setDefault(!defaultData);
            }}>
            <Text style={style.orderListLeft}>是否是默认地址</Text>
            <View style={style.orderListRight}>
              {/* <Text style={{fontSize: 16, paddingRight: 10, color: '#999'}}>
                {address.length > 0 ? address : '请选择'}
              </Text> */}
              <CheckBox checked={defaultData} />
            </View>
          </TouchableOpacity>
          {/* <ListItem style={{paddingLeft: 2, marginLeft: 0}}>
            <Left>
              <Text style={{fontSize: 16, color: '#555'}}>是否是默认地址</Text>
            </Left>
            <Right>
              <CheckBox
                checked={props.defaultData}
                onPress={() => {
                  setDefault(!defaultData);
                }}
              />
            </Right>
          </ListItem> */}
        </Content>

        <Footer
          style={{
            width: '100%',
            backgroundColor: '#fff',
            borderTopWidth: 0,
            borderTopColor: '#fff',
          }}>
          <Button
            onPress={() => {
              saveAddress();
            }}
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
              保存地址
            </Text>
          </Button>
        </Footer>
        <CustomizePicker
          isVisible={visible}
          pickerData={pickerData}
          data1={province}
          data2={city}
          data3={county}
          cancelFn={() => {
            setVisible(false);
          }}
          confirmFn={(a, b, c) => {
            console.log(a, b, c);
            setAddress(c);
            setVisible(false);
          }}
          selectIndex={indexArr => {
            console.log(indexArr);
          }}
          selectValue={indexValue => {
            console.log(indexValue);
            setAddressCode(prevState => {
              indexValue &&
                indexValue.map((val, index) => {
                  console.log(val, index, 'loop before');
                  if (val !== prevState[index]) {
                    console.log(index, val, 'loop after');
                    switch (index) {
                      case 0:
                        selectCity(val);
                        break;
                      case 1:
                        selectCounty(val);
                        break;
                    }
                  }
                  return val;
                });
              return indexValue;
            });
          }}
          selectLabel={indexLabel => {
            console.log(indexLabel, 'address label');
            // setAddress(indexLabel);
          }}
          title={'请选择省市级'}
        />
        {/* <RNPicker /> */}
      </Container>
    </Modal>
  );
}
export default AddAddress;
