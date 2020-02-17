import {StyleSheet} from 'react-native';

const DetailPopUpStyle = StyleSheet.create({
  info: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    position: 'relative',
  },
  productInfo: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  price: {
    fontSize: 22,
    paddingBottom: 10,
  },
  select: {},
  popImage: {
    width: 100,
    height: 100,
    top: -20,
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  attribute: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  attributeTitle: {
    fontSize: 16,
    paddingVertical: 10,
  },
  attributeContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  attributeValue: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginLeft: 10,
    marginBottom: 15,
    backgroundColor: '#f1f1f1',
  },
  attributeSelectValue: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginLeft: 10,
    marginBottom: 15,
    backgroundColor: '#FF6672',
  },
  attributeSelectText: {
    color: '#fff',
  },
  attributeText: {
    color: '#000',
  },
});
export {DetailPopUpStyle};
