import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RecommendStyle as style} from './recommendStyle';

function RecommendList(props) {
  console.log(props, 'props');
  let detailHandle = (productId: string) => {
    console.log(productId);
    props.navigation.navigate('Detail', {
      productId: productId,
    });
  };
  // React.useState(() => {

  // }, [])
  return (
    <View style={style.list}>
      {props.data.map((val, index) => {
        return (
          <View key={index}>
            <View style={style.title}>
              <Text style={style.bigTilte}>{val.title}</Text>
              <Text style={style.smallTilte}>/ {val.englishTitle}</Text>
            </View>
            <View style={style.listContent}>
              {val.productionId.map((res, key) => {
                return (
                  <TouchableOpacity
                    key={key}
                    style={style.listContainer}
                    onPress={() => detailHandle(res._id)}>
                    <View style={style.listImageBox}>
                      <Image
                        source={{
                          uri: res.pic,
                        }}
                        style={style.listImage}
                      />
                    </View>
                    <View style={style.listText}>
                      <Text style={style.listTitle} numberOfLines={1}>
                        {res.title}
                      </Text>
                      <Text style={style.listPrice}>
                        ¥{res.minPrice} - {res.maxPrice}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
}
export default RecommendList;
