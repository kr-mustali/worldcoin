/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import heart from '../assets/icons/heart.png';
import eth from '../assets/icons/eth.png';

import Info from './Info';

const NFTCard = ({data, navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 250,
        }}>
        <Image source={data.image} style={styles.image} resizeMode="cover" />

        <TouchableOpacity style={styles.circle}>
          <Image
            source={heart}
            resizeMode="contain"
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
        <Info />
        <View style={{paddingHorizontal: 14}}>
          <Text
            style={{
              marginTop: 10,
              fontWeight: 'bold',
              color: 'black',
              fontSize: 18,
            }}>
            {data.name}
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: 'grey',
              fontSize: 14,
            }}>
            by {data.creator}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image source={eth} style={{width: 24, height: 24}} />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 16,
              }}>
              {data.price}
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 10, width: 100}}
              onPress={() => navigation.navigate('Details', {data})}>
              <Text
                style={{
                  backgroundColor: 'black',
                  color: '#fff',
                  padding: 10,
                  borderRadius: 20,
                  textAlign: 'center',
                }}>
                Place Bid
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    marginBottom: 24,
    border: 2,
    margin: 14,
    backgroundColor: '#fff',
    shadowColor: '#74858C',
    elevation: 14,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
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
});

export default NFTCard;
