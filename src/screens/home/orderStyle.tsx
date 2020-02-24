import {StyleSheet} from 'react-native';

const OrderStyle = StyleSheet.create({
  orderContent: {
    // borderTopColor: '#f1f1f1',
    // borderTopWidth: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  orderLeft: {
    flexDirection: 'row',
  },
  orderInfo: {
    paddingLeft: 10,
    // width: '70%',
    // marginLeft: 20,
  },
  orderInfoTitle: {
    fontSize: 18,
    paddingBottom: 10,
  },
  orderInfoProperty: {
    fontSize: 15,
    // width: '80%',
  },
  orderRight: {
    // alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  orderPrice: {
    fontSize: 18,
  },
  orderNumber: {
    fontSize: 18,
    textAlign: 'right',
    color: '#999',
  },

  orderTotal: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomWidth: 5,
    borderBottomColor: '#f1f1f1',
  },
  orderTotalCount: {
    textAlign: 'right',
    fontWeight: '500',
    paddingLeft: 10,
    fontSize: 19,
  },
  orderUse: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 5,
    borderBottomColor: '#f1f1f1',
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  orderUseTitle: {fontSize: 18},
  orderUseItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderUseItem: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    // borderRadius: 10,
    marginLeft: 10,
  },
  orderUseItemSelect: {
    borderWidth: 0,
    borderColor: '#FC557D',
    // borderRadius: 10,
    backgroundColor: '#FC557D',
    color: '#fff',
  },
  orderListItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderBottomWidth: 5,
    borderBottomColor: '#f1f1f1',
  },
  orderListLeft: {fontSize: 18},
  orderListRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 0,
    height: 60,
  },
  orderFooterLeft: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    // justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
    // paddingLeft: 10,
  },
  orderTotalText: {
    fontSize: 20,
    paddingLeft: 20,
  },
  orderTotalPrice: {
    fontSize: 20,
    color: '#FC557D',
    paddingLeft: 10,
  },
  buttonPayment: {
    width: '40%',
    backgroundColor: '#FC557D',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPaymentText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});
export {OrderStyle};
