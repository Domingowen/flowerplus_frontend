import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {headerStyle as style} from './headerStyle';

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
  Tabs,
  Tab,
  Card,
  CardItem,
} from 'native-base';
function HeaderComponent(props: any) {
  console.log(props);
  const navigation = props.navigation;
  return (
    <Header style={style.header}>
      <Left>
        {props.button ? (
          <Button transparent onPress={props.leftFn}>
            {props.leftIcon ? (
              <Icon name={props.leftIcon} style={{color: '#000'}} />
            ) : null}
            {props.leftTitle ? (
              <Text style={style.title}>{props.leftTitle}</Text>
            ) : null}
          </Button>
        ) : null}
      </Left>
      <Body>
        <Title style={style.title}>{props.title}</Title>
      </Body>

      <Right>
        {props.button ? (
          <Button transparent onPress={props.rightFn}>
            {props.rightIcon ? (
              <Icon name={props.rightIcon} style={{color: '#000'}} />
            ) : null}
            {props.rightTitle ? (
              <Text style={style.title}>{props.rightTitle}</Text>
            ) : null}
          </Button>
        ) : null}
      </Right>
    </Header>
  );
}
export default HeaderComponent;
