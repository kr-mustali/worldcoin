/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import heart from '../assets/icons/heart.png';
import left from '../assets/icons/left.png';

const DetailHeader = ({data, navigation}) => {
  return (
    <View style={{width: '100%', height: 373}}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
      />
      <TouchableOpacity style={styles.circle}>
        <Image
          source={heart}
          resizeMode="contain"
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.leftCircle}
        onPress={() => navigation.goBack()}>
        <Image
          source={left}
          resizeMode="contain"
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    top: 10,
  },
  leftCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    left: 10,
  },
});
export default DetailHeader;
