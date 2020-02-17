import {StyleSheet} from 'react-native';

const DetailStyle = StyleSheet.create({
  banner: {
    width: '100%',
    height: 350,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  productContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
    borderTopWidth: 10,
    borderTopColor: '#f1f1f1',
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 10,
  },
  productTitle: {
    fontSize: 20,
    paddingBottom: 6,
  },
  productDescription: {
    // paddingVertical: 6,

    fontSize: 16,
    color: '#999999',
  },
  productPrice: {
    fontSize: 24,
    color: 'red',
    paddingVertical: 20,
  },
  productAdvantage: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    paddingBottom: 10,
    paddingTop: 10,
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  productAdvantageDesc: {
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 89,
  },
  productPromotion: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  productPromotionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: 6,
  },
  productPromotionContent: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '78%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  productPromotionText: {
    borderColor: 'red',
    borderWidth: 0.5,
    height: 20,
    lineHeight: 18,
    paddingHorizontal: 6,
    marginRight: 6,
    fontSize: 12,
    textAlign: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  productPromotionDec: {
    // width: 300,
    // paddingRight: 10,
  },
});
export {DetailStyle};
