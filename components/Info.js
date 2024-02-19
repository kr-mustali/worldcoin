/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import person03 from '../assets/images/person03.png';
import person04 from '../assets/images/person04.png';
import person02 from '../assets/images/person02.png';
const Info = () => {
  return (
    <View style={{paddingHorizontal: 14, marginTop: -24}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            resizeMode="contain"
            source={person02}
            style={{width: 48, height: 48}}
          />
          <Image
            source={person03}
            style={{width: 48, height: 48, marginLeft: -12}}
          />
          <Image
            source={person04}
            style={{width: 48, height: 48, marginLeft: -12}}
          />
        </View>
        <View style={styles.miniContainer}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              textAlign: 'center',
            }}>
            Ending in
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 14,
              textAlign: 'center',
            }}>
            12h 30m
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  miniContainer: {
    borderRadius: 14,
    backgroundColor: '#fff',
    shadowColor: '#74858C',
    elevation: 14,
    position: 'absolute',
    right: 10,
    marginLeft: 80,
    width: 100,
    height: 50,
    padding: 5,
  },
});
export default Info;
