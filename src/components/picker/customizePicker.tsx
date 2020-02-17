/*
  confirmFn
  cancelFn
  title
  pickerData : [array]
  data1 : array
  data2 : array
  data3 : array
  only three data cascader

*/

import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Picker,
} from 'react-native';

import {CustomizePickerStyle as style} from './customizePickerStyle';

function CustomizePicker(props) {
  // const [] = useState();
  console.log(props, 'pickerProps');
  const [selectValue, setSelectValue] = useState([]); // 获取选择到的值
  const [selectIndex, setSelectIndex] = useState([]); // 获取选择到的index
  const [selectLabel, setSelectLabel] = useState([]); // 获取选择label的值
  // const [init, setInit] = useState(false); // 设置初始值
  useEffect(() => {
    setSelectLabel(prevState => {
      // console.log(props.data1);
      prevState.splice(0, 1, props.data1[0].name);
      return prevState;
    });
    setSelectValue(prevState => {
      // console.log(props.data1);
      prevState.splice(0, 1, props.data1[0].statistical_code);
      return prevState;
    });
    setSelectIndex(selectIndex.splice(0, 1, 0));
  }, [props.data1]);

  useEffect(() => {
    if (props.data2) {
      setSelectLabel(prevState => {
        // console.log(props.data2);
        prevState.splice(1, 1, props.data2[0].name);
        return prevState;
      });
      setSelectValue(prevState => {
        // console.log(props.data2);
        prevState.splice(1, 1, props.data2[0].statistical_code);
        return prevState;
      });
      setSelectIndex(selectIndex.splice(1, 1, 0));
    }
  }, [props.data2]);

  useEffect(() => {
    if (props.data3) {
      setSelectLabel(prevState => {
        // console.log(props.data3);
        prevState.splice(2, 1, props.data3[0].name);
        return prevState;
      });
      setSelectValue(prevState => {
        // console.log(props.data3, 'select label');
        prevState.splice(2, 1, props.data3[0].statistical_code);
        return prevState;
      });
      setSelectIndex(selectIndex.splice(2, 1, 0));
    }
  }, [props.data3]);

  useEffect(() => {
    props.selectIndex && props.selectIndex(selectIndex);
    props.selectValue && props.selectValue(selectValue);
    props.selectLabel && props.selectLabel(selectLabel);
    console.log(selectLabel, 'selectLabel');
  }, [selectValue, selectIndex, selectLabel]);
  // let confirmFn = () => {
  //   props.confirmFn()
  // }
  return props.isVisible ? (
    <View style={style.customizePicker}>
      {/* <Text>{selectLabel}</Text> */}
      <View style={style.customizeHeader}>
        <TouchableOpacity onPress={() => props.cancelFn && props.cancelFn()}>
          <Text style={{color: '#00BBF4', fontSize: 16}}>取消</Text>
        </TouchableOpacity>
        <View>
          <Text style={{color: '#FC557D', fontSize: 18}}>
            {props.title && props.title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            props.confirmFn &&
            props.confirmFn(selectIndex, selectValue, selectLabel)
          }>
          <Text style={{color: '#00BBF4', fontSize: 16}}>确定</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        {/* <Text>{selectIndex}</Text> */}
        {/* <Text>{selectValue}</Text> */}
        {props.pickerData &&
          props.pickerData.map((val: [object], valIndex: number) => {
            return (
              <Picker
                key={valIndex}
                style={{flex: 1}}
                onValueChange={(value, index) => {
                  console.log(value, index, 'picker selecting');
                  setSelectValue(prevState => {
                    let newState = prevState.map((this_val, this_key) => {
                      if (this_key === valIndex) {
                        this_val = value;
                      }
                      return this_val;
                    });
                    return newState;
                  });
                  setSelectIndex(prevState => {
                    let newState = prevState.map((this_val, this_key) => {
                      if (this_key === valIndex) {
                        this_val = index;
                      }
                      return this_val;
                    });
                    return newState;
                  });

                  setSelectLabel(prevState => {
                    let newState = prevState.map((this_val, this_key) => {
                      if (this_key === valIndex) {
                        this_val = props.pickerData[valIndex][index].label;
                      }
                      return this_val;
                    });
                    return newState;
                  });
                }}
                selectedValue={selectValue[valIndex]}>
                {val.map((res, key) => (
                  <Picker.Item key={key} label={res.label} value={res.value} />
                ))}
              </Picker>
            );
          })}
      </View>
    </View>
  ) : null;
}
export default CustomizePicker;
