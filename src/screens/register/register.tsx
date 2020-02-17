import * as React from 'react';
import {View, Image} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import {RegisterStyle as style} from './registerStyle';
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
import {LoginDispatch} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
// import IconFont from '../../utils/iconSet';
function Register(props) {
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
      navigation.popToTop();
    }
  }, [token]);
  let handleRegister = () => {
    requestHttp('/register', 'post', {
      username: account,
      password,
    })
      .then(res => {
        console.log(res);
        dispatch(LoginDispatch(res.data));
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
        navigation={navigation}
      />
      <View style={style.content}>
        <View style={style.login}>
          <Text style={style.loginText}>账号注册</Text>
        </View>
        <Item>
          <Label>账号</Label>
          <Input autoCapitalize={'none'} onChangeText={e => setAccount(e)} />
        </Item>
        <Item>
          <Label>密码</Label>
          <Input autoCapitalize={'none'} onChangeText={e => setPassword(e)} secureTextEntry={true} />
        </Item>
        <Button block style={style.loginBtn} onPress={handleRegister}>
          <Text>注册</Text>
        </Button>
      </View>
    </Container>
  );
}
export default Register;
