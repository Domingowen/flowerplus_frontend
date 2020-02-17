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
import {OtherStyle as style} from './otherStyle';

function OtherList(props) {
  console.log(props, 'otherProps');
  let detailHandle = (productId: string) => {
    console.log(productId);
    props.navigation.navigate('Detail', {
      productId: productId,
    });
  };
  return (
    <View style={style.list}>
      <View style={style.title}>
        <Text style={style.bigTilte}>{props.data.categoryEnglishTitle}</Text>
        <Text style={style.smallTilte}>{props.data.categoryTitle}</Text>
      </View>
      <View style={style.listContent}>
        {props.data.productId.map((val, index) => {
          return (
            <TouchableOpacity
              style={style.listContainer}
              key={index}
              onPress={() => detailHandle(val._id)}>
              <View style={style.listImageBox}>
                <Image
                  source={{
                    uri: val.pic,
                  }}
                  style={style.listImage}
                />
              </View>
              <View style={style.listText}>
                <Text style={style.listTitle} numberOfLines={1}>
                  {val.title}
                </Text>
                <Text style={style.listPrice}>
                  ¥{val.minPrice} - {val.maxPrice}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
export default OtherList;
