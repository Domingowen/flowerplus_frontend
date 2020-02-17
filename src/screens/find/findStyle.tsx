import {StyleSheet} from 'react-native';

const FindStyle = StyleSheet.create({
  gallery: {
    backgroundColor: '#fff',
    // height: 300,
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'center',
    marginTop: 10,
    // paddingVertical: 10,
    paddingHorizontal: 10,
    height: 300,
  },
  image: {
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
    // paddingHorizontal: 10,
    position: 'relative',
    // textAlign: 'center',
  },
  text: {
    fontSize: 26,
    position: 'absolute',
    top: 60,
    left: 20,
  },
});
export {FindStyle};
