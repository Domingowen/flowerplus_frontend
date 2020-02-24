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
import {DetailStyle as style} from './detailStyle';
import {getBottomSpace} from 'react-native-iphone-x-helper';
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
import Icon from '../../iconfont/Icon';
import HeaderComponent from '../../components/header/header';
// import Modal from 'react-native-modal';

import DetailPopUp from './detailPopUp';
import requestHttp from '../../utils/request';
function Detail(props) {
  console.log(props, 'props');
  const [detail, setDetail] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  React.useEffect(() => {
    requestHttp('/detail/index', 'post', {
      productId: props.route.params.productId,
    })
      .then(res => {
        console.log(res);
        setDetail(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(detail, 'detail');
  }, []);
  const navigation = props.navigation;
  return (
    <Container>
      <HeaderComponent
        title="KOK鲜花"
        button={true}
        leftIcon={'arrow-back'}
        leftFn={() => {
          navigation.goBack();
        }}
        navigation={navigation}
      />
      {detail && (
        <Content>
          <View style={style.banner}>
            <Image source={{uri: detail.pic}} style={style.bannerImage} />
          </View>
          <View style={style.productContent}>
            <Text style={style.productTitle}>{detail.title}</Text>
            <Text style={style.productDescription}>{detail.description}</Text>
            <Text style={style.productPrice}>
              ¥ {detail.minPrice} - {detail.maxPrice}
            </Text>
            <View style={style.productAdvantage}>
              {detail.advantage.map((val, index) => {
                return (
                  <View style={style.productAdvantageDesc} key={index}>
                    <Icon name={'gou'} color={'red'} size={18} />
                    <Text>{val.name}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={style.productPromotion}>
            <Text style={style.productPromotionTitle}>促销</Text>

            <View>
              {detail.promotion.map((val, index) => {
                return (
                  <View style={style.productPromotionContent} key={index}>
                    <Text style={style.productPromotionText}>{val.label}</Text>
                    <Text style={style.productPromotionDec}>{val.value}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </Content>
      )}

      <Footer style={{width: '100%', backgroundColor: '#fff'}}>
        <Button
          full
          style={{width: '100%', backgroundColor: '#FF6672', height: '100%'}}
          onPress={() => {
            setModal(true);
          }}>
          <Text style={{color: '#fff'}}>立即购买</Text>
        </Button>
      </Footer>
      <DetailPopUp
        isVisible={modal}
        close={() => {
          setModal(false);
        }}
        productSku={detail && detail.productionSku}
        productArr={detail && detail.productionAttr}
        minPrice={detail && detail.minPrice}
        maxPrice={detail && detail.maxPrice}
        pic={detail && detail.pic}
        productId={detail && detail._id}
        {...props}
      />
    </Container>
  );
}

export default Detail;
