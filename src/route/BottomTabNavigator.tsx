import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/home';
import Mine from '../screens/mine/mine';
import Message from '../screens/message/message';
import Find from '../screens/find/find';
// import IconFont from '../utils/iconSet';
import Icon from '../iconfont/Icon';
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        labelStyle: {
          fontSize: 14,
        },
        style: {
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({color, size}) => {
            console.log(size);
            console.log(color);
            return <Icon name="shouye" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Find"
        component={Find}
        options={{
          tabBarLabel: '发现',
          tabBarIcon: ({color, size}) => {
            return <Icon name="discover" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: '消息',
          tabBarIcon: ({color, size}) => {
            return <Icon name="kefu" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => {
            return <Icon name="wode" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigator;
