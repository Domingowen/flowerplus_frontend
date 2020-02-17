import {NavigationNativeContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import AuthPage from '../screens/auth/authority';
import Login from '../screens/login/login';
import Register from '../screens/register/register';
import Detail from '../screens/home/detail';
import Order from '../screens/home/order';
import PersonDetail from '../screens/mine/personDetail';
import OrderList from '../screens/mine/orderList';
import Address from '../screens/mine/address';
import Finish from '../screens/home/finish';
import Coupon from '../screens/mine/coupon';
// import Find from '../screens/find/find';
const Stack = createNativeStackNavigator();
function RootNavigation() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
          animation: 'none',
        }}>
        <Stack.Screen name="Auth" component={AuthPage} />
        <Stack.Screen name="TabHome" component={BottomTabNavigator} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="PersonDetail" component={PersonDetail} />
        <Stack.Screen name="OrderList" component={OrderList} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Finish" component={Finish} />
        <Stack.Screen name="Coupon" component={Coupon} />
        {/* <Stack.Screen name="Find" component={Find} /> */}
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="TabHome" component={BottomTabNavigator} />
        <Stack.Screen name="Rent" component={Rent} />
        <Stack.Screen name="RentHouseList" component={RentHouseList} />
        <Stack.Screen name="RentHouseDetail" component={RentHouseDetail} />
        <Stack.Screen name="Tenant" component={Tenant} />
        <Stack.Screen name="TenantDetail" component={TenantDetail} />
        <Stack.Screen name="TenantBill" component={TenantBill} />
        <Stack.Screen name="TenantBillDetail" component={TenantBillDetail} />
        <Stack.Screen name="HouseAdd" component={HouseAdd} />
        <Stack.Screen name="TenantAdd" component={TenantAdd} />
        <Stack.Screen name="HouseAddDetail" component={HouseAddDetail} />
        <Stack.Screen
          name="HouseAddDetailSetting"
          component={HouseAddDetailSetting}
        />
        <Stack.Screen name="HouseSettingAdd" component={HouseSettingAdd} />
        <Stack.Screen name="TenantFeeSetting" component={TenantFeeSetting} />
        <Stack.Screen name="TenantSuccess" component={TenantSuccess} />
        <Stack.Screen name="House" component={House} /> */}
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}
export default RootNavigation;
