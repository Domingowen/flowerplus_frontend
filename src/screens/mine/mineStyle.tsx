import {StyleSheet} from 'react-native';

const MineStyle = StyleSheet.create({
  bgImg: {
    height: 300,
    width: '100%',
  },
  header: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
    top: 100,
    right: 0,
    left: 0,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginBottom: 10,
  },
  avatarText: {
    marginBottom: 20,
  },
  statusList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  statusIcon: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 58,
  },
  bottom: {
    marginHorizontal: 10,
    marginTop: 120,
  },
  myServices: {},
  bottomTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottomContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  bottomItems: {
    width: '25%',
    flexDirection: 'column',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
export {MineStyle};
