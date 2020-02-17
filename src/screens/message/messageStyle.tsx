import {StyleSheet} from 'react-native';
const MessageStyle = StyleSheet.create({
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  imageContainer: {
    paddingRight: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 18,
    paddingBottom: 8,
  },
  description: {
    fontSize: 14,
  },
});
export {MessageStyle};
