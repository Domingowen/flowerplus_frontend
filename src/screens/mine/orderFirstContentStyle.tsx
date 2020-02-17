import {StyleSheet} from 'react-native';
const OrderFirstContentStyle = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  image: {
    width: 70,
    height: 70,
  },
  detail: {
    paddingLeft: 10,
  },
  detailTitle: {
    fontSize: 18,
    paddingBottom: 10,
  },
  detailDescription: {
    fontSize: 16,
    color: '#999',
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  btnItem: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#FF6672',
    borderRadius: 2,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  btnText: {
    fontSize: 14,
  },
});
export {OrderFirstContentStyle};
