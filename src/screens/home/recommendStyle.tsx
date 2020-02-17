import {StyleSheet} from 'react-native';
const RecommendStyle = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  bigTilte: {fontSize: 20, fontWeight: 'bold'},
  smallTilte: {fontSize: 16, color: '#ccc', paddingLeft: 5},
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

export {RecommendStyle};
