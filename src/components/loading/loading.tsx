import React, {Component} from 'react';
import {View} from 'react-native';
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
  Spinner,
  Thumbnail,
} from 'native-base';
function LoadingHoc(WrappedComponent) {
  return class Loading extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loadingStatus: false,
      };
    }
    settingLoading() {
      this.setState({
        loadingStatus: !this.state.loadingStatus,
      });
    }
    render() {
      return (
        <View style={{width: '100%', height: '100%'}}>
          {this.state.loadingStatus ? (
            <View
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999,
                backgroundColor: 'rgba(000,000,000,0.6)'
              }}>
              <Spinner color="#fff" />
            </View>
          ) : null}
          <WrappedComponent
            {...this.props}
            settingLoading={() => {
              this.settingLoading();
            }}
          />
        </View>
      );
    }
  };
}
export default LoadingHoc;
