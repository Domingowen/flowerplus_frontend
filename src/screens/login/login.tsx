import * as React from 'react';
import {View, Image} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import {LoginStyle as style} from './loginStyle';
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
  Form,
  Item,
  Label,
  Input,
} from 'native-base';
import requestHttp from '../../utils/request';
// import IconFont from '../../utils/iconSet';
import {useDispatch, useSelector} from 'react-redux';
import {LoginDispatch} from '../../redux/actions';
function Login(props) {
  const navigation = props.navigation;
  const [account, setAccount] = React.useState('');
  const [password, setPassword] = React.useState('');
  const token = useSelector(state => {
    console.log(state.User);
    return state.User.token;
  });
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (token) {
      // console.log(1111);
      navigation.goBack();
    }
  }, [token]);
  let handleLogin = () => {
    requestHttp('/login', 'post', {
      username: account,
      password,
    })
      .then(res => {
        console.log(res);
        dispatch(LoginDispatch(res.data));
        console.log(token);
      })
      .catch(err => {
        console.log(err);
      });
  };
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
      <View style={style.content}>
        <View style={style.login}>
          <Text style={style.loginText}>账号登录</Text>
        </View>
        <Item>
          <Label>账号</Label>
          <Input autoCapitalize={'none'} onChangeText={e => setAccount(e)} />
        </Item>
        <Item>
          <Label>密码</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={e => setPassword(e)}
            secureTextEntry={true}
          />
        </Item>
        <Button block style={style.loginBtn} onPress={handleLogin}>
          <Text>登录</Text>
        </Button>
        <Button
          block
          style={{marginTop: 30, backgroundColor: 'transparent'}}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={{color: '#000'}}>去注册</Text>
        </Button>
      </View>
    </Container>
  );
}
export default Login;
