import * as React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import {MessageStyle as style} from './messageStyle';
import HeaderComponent from '../../components/header/header';
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
// import IconFont from '../../utils/iconSet';
function Message() {
  return (
    <Container style={{backgroundColor: '#f1f1f1'}}>
      <HeaderComponent title="YABO-FLOWER" />
      <Content>
        <TouchableOpacity style={style.items}>
          <View style={style.imageContainer}>
            <Image
              source={require('../../assets/sms.png')}
              resizeMode={'contain'}
              style={style.image}
            />
          </View>
          <View>
            <Text style={style.title}>通知消息</Text>
            <Text style={style.description}>暂时没有相关消息哦</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.items}>
          <View style={style.imageContainer}>
            <Image
              source={require('../../assets/label.png')}
              resizeMode={'contain'}
              style={style.image}
            />
          </View>
          <View>
            <Text style={style.title}>优惠活动</Text>
            <Text style={style.description}>暂时没有相关消息哦</Text>
          </View>
        </TouchableOpacity>
      </Content>
    </Container>
  );
}
export default Message;
