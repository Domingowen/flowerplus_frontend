import {StyleSheet} from 'react-native';
const OtherStyle = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
  title: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: '100%',
  },
  bigTilte: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  smallTilte: {
    fontSize: 24,
    color: '#ccc',
    textAlign: 'center',
  },
  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listContainer: {
    width: '49%',
    marginBottom: 15,
  },
  listImageBox: {},
  listImage: {
    width: '100%',
    height: 200,
  },
  listText: {
    // flexDirection: 'column',
  },
  listTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  listPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export {OtherStyle};
