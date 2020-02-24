/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStyle as style} from './homeStyle';
import RecommendList from './recommend';
import OtherList from './other';
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
} from 'native-base';
import HeaderComponent from '../../components/header/header';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
// import CardView from 'react-native-cardview';
// import IconFont from '../../utils/iconSet';
import requestHttp from '../../utils/request';
// console.log(requestHttp);
import Loading from '../../components/loading/loading';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [],
      recommendList: [],
      categoryList: [],
      sceneMap: {},
    };
  }
  async initData() {
    // console.log(this.props, 'props data');
    this.props.settingLoading();
    await requestHttp('/home/index', 'get')
      .then(res => {
        console.log(res.data);
        let categoryList = res.data.categoryList;
        let recommendList = res.data.recommendList;
        // setCategoryList(res.data.categoryList);
        // setRecommendList(res.data.recommendList);
        let routeList = this.state.routes;
        let sceneList = this.state.sceneMap;
        sceneList['player0'] = () => (
          <View>
            <ScrollView>
              <RecommendList data={recommendList} {...this.props} />
            </ScrollView>
          </View>
        );
        categoryList.forEach((val, index) => {
          routeList.push({
            key: 'player' + (index + 1),
            title: val.title,
          });
          sceneList['player' + (index + 1)] = () => (
            <View>
              <ScrollView>
                <OtherList data={val} {...this.props} />
              </ScrollView>
            </View>
          );
        });
        routeList.unshift({key: 'player0', title: '推荐'});
        // setSceneMap(sceneList);
        // setRoutes(routeList);
        this.setState({
          routes: routeList,
          sceneMap: sceneList,
        });
        console.log(routeList);
        console.log(sceneList);
      })
      .catch(err => {
        console.log(err);
      });
    this.props.settingLoading();
  }
  componentDidMount() {
    this.initData();
    // console.log(this.props, 'props');
  }
  initTabBar = props => {
    console.log(props, 'props');
    return (
      <TabBar
        {...props}
        scrollEnabled={true}
        indicatorStyle={{
          backgroundColor: '#000',
        }}
        style={{
          backgroundColor: 'transparent',
          shadowOffset: {height: 0, width: 0},
          shadowColor: 'transparent',
          shadowOpacity: 0,
          elevation: 0,
        }}
        getLabelText={({route}) => route.title}
        renderLabel={({route, focused, color}) => {
          return (
            <Text style={{color, fontWeight: focused ? 'bold' : 'normal'}}>
              {route.title}
            </Text>
          );
        }}
        tabStyle={{
          width: 80,
        }}
        activeColor={'#000'}
        inactiveColor={'#000'}
      />
    );
  };
  render() {
    return (
      <Container>
        <HeaderComponent title="KOK鲜花" />
        {this.state.routes.length > 0 && (
          <TabView
            navigationState={{
              index: this.state.index,
              routes: this.state.routes,
            }}
            renderScene={SceneMap(this.state.sceneMap)}
            onIndexChange={index => this.setState({index})}
            initialLayout={{width: Dimensions.get('window').width}}
            // lazy={true}
            renderTabBar={props => this.initTabBar(props)}
          />
        )}
      </Container>
    );
  }
}
// function Home(props) {
//   console.log(props);
//   const initialLayout = {width: Dimensions.get('window').width};
//   const navigation = props.navigation;
//   const [index, setIndex] = React.useState(0);
//   const [routes, setRoutes] = React.useState([]);
//   const [categoryList, setCategoryList] = React.useState([]);
//   const [recommendList, setRecommendList] = React.useState([]);
//   const [sceneMap, setSceneMap] = React.useState({});
//   let initHomeData = () => {
//     return requestHttp('/home/index', 'get');
//   };
//   React.useEffect(() => {
//     let result = initHomeData();
//     // console.log(result);
//     result
//       .then(res => {
//         console.log(res.data);
//         let categoryList = res.data.categoryList;
//         setCategoryList(res.data.categoryList);
//         setRecommendList(res.data.recommendList);
//         let routeList = routes;
//         let sceneList = sceneMap;

//         sceneList['player0'] = () => (
//           <View>
//             <ScrollView>
//               <RecommendList data={recommendList} />
//             </ScrollView>
//           </View>
//         );
//         categoryList.forEach((val, index) => {
//           routeList.push({
//             key: 'player' + (index + 1),
//             title: val.title,
//           });
//           sceneList['player' + (index + 1)] = () => (
//             <View>
//               <ScrollView>
//                 <OtherList data={val} />
//               </ScrollView>
//             </View>
//           );
//         });
//         routeList.unshift({key: 'player0', title: '推荐'});
//         // setSceneMap(sceneList);
//         setRoutes(routeList);
//         console.log(routeList);
//         console.log(sceneList);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);
//   console.log(categoryList, 'list');
//   console.log(recommendList, 'list');
//   // console.log(renderScene);
//   console.log(routes.length);
//   let initTabBar = props => {
//     console.log(props, 'props');
//     return (
//       <TabBar
//         {...props}
//         scrollEnabled={true}
//         indicatorStyle={{
//           backgroundColor: '#000',
//         }}
//         style={{
//           backgroundColor: 'transparent',
//           shadowOffset: {height: 0, width: 0},
//           shadowColor: 'transparent',
//           shadowOpacity: 0,
//           elevation: 0,
//         }}
//         getLabelText={({route}) => route.title}
//         renderLabel={({route, focused, color}) => {
//           return (
//             <Text style={{color, fontWeight: focused ? 'bold' : 'normal'}}>
//               {route.title}
//             </Text>
//           );
//         }}
//         tabStyle={{
//           width: 80,
//         }}
//         activeColor={'#000'}
//         inactiveColor={'#000'}
//       />
//     );
//   };
//   return (
//     <Container>
//       <HeaderComponent title="KOK鲜花" />
//       <TabView
//         navigationState={{index, routes}}
//         renderScene={React.useCallback(SceneMap(sceneMap), [])}
//         onIndexChange={setIndex}
//         initialLayout={initialLayout}
//         // lazy={true}
//         renderTabBar={props => initTabBar(props)}
//       />
//     </Container>
//   );
// }
export default Loading(Home);
