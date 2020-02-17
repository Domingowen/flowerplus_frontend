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
import {DetailPopUpStyle as style} from './detailPopUpStyle';
import requestHttp from '../../utils/request';

function DetailPopUp(props) {
  console.log(props, 'detailProps');
  const navigation = useNavigation();
  const [productArr, setProductArr] = React.useState([]);
  const [select, setSelect] = React.useState([]);
  const [selectValue, setSelectValue] = React.useState([]);
  const [selectSkuId, setSelectSkuId] = React.useState('');
  const [price, setPrice] = React.useState('');
  const userId = useSelector(state => state.User.userId);
  const token = useSelector(state => state.User.token);

  React.useEffect(() => {
    setProductArr(props.productArr);
  }, [props.productArr]);
  React.useEffect(() => {
    // let selectValueData = selectValue;
    if (selectValue.length === 2) {
      // console.log(selectValueData.reverse().join(';'));
      let newSelectValue = selectValue
        .slice()
        .reverse()
        .join(';');
      // console.log(newSelectValue);
      props.productSku.map(val => {
        // console.log(val);
        if (val.skuProperties === newSelectValue) {
          // console.log(val);
          setPrice(val.price);
          setSelectSkuId(val._id);
        }
      });
    }
    // console.log(selectValue);
  });
  let handleSelect = (index, attrId, attrSubId, name) => {
    console.log(index, attrId, attrSubId);
    setSelectValue(prevState => {
      prevState[index] = `${attrId}:${attrSubId}`;
      console.log(prevState);
      return prevState;
    });
    setSelect(prevState => {
      prevState[index] = name;
      console.log(prevState);
      return prevState;
    });
    setProductArr(prevState => {
      prevState[index].attributeValueId.forEach(val => {
        if (val.attrValId === attrSubId) {
          val.check = true;
        } else {
          val.check = false;
        }
      });
      console.log(prevState);
      return [...prevState];
    });
  };
  let submitOrder = () => {
    if (!token) {
      props.close();
      navigation.navigate('Login');
    }
    if (!selectSkuId) {
      return false;
    }
    requestHttp('/order/index', 'post', {
      productId: props.productId,
      skuId: selectSkuId,
      userId,
    })
      .then(res => {
        console.log(res);
        props.close();
        navigation.navigate('Order', {
          orderId: res.data.orderId,
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
      <View
        style={{
          // flex: 1,
          width: '100%',
          height: '80%',
          backgroundColor: '#fff',
        }}>
        <View style={style.info}>
          <Image source={{uri: props.pic}} style={style.popImage} />
          <View style={style.productInfo}>
            <Text style={style.price}>
              ¥ {price ? price : `${props.minPrice} - ${props.maxPrice}`}
            </Text>
            <Text style={style.select}>已选: {select.join(' ')}</Text>
          </View>
          <TouchableOpacity
            style={style.close}
            onPress={() => {
              props.close();
            }}>
            <Icon name={'guanbi1'} size={30} />
          </TouchableOpacity>
        </View>
        {productArr &&
          productArr.map((val, index) => {
            return (
              <View style={style.attribute} key={index}>
                <Text style={style.attributeTitle}>{val.name}</Text>
                <View style={style.attributeContent}>
                  {val.attributeValueId.map((res, key) => {
                    return (
                      <TouchableOpacity
                        style={
                          res.check
                            ? style.attributeSelectValue
                            : style.attributeValue
                        }
                        key={key}
                        onPress={() =>
                          handleSelect(
                            index,
                            res.attrId,
                            res.attrValId,
                            res.name,
                          )
                        }>
                        <Text
                          style={
                            res.check
                              ? style.attributeSelectText
                              : style.attributeText
                          }>
                          {res.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            );
          })}
        <Button
          full
          style={{
            width: '100%',
            backgroundColor: '#FF6672',
            position: 'absolute',
            bottom: 40,
          }}
          onPress={submitOrder}>
          <Text style={{color: '#fff'}}>确定</Text>
        </Button>
      </View>
    </Modal>
  );
}
export default DetailPopUp;
