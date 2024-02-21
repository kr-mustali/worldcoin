import React from 'react';
import {Image, Text, View} from 'react-native';
import person03 from '../assets/images/person03.png';
import person04 from '../assets/images/person04.png';
import person02 from '../assets/images/person02.png';
import eth from '../assets/icons/eth.png';

const CurrentBid = ({item}) => {
  return (
    <View style={{marginLeft: 15, marginTop: 10, flexDirection: 'row'}}>
      <Image
        resizeMode="contain"
        source={item.image}
        style={{width: 48, height: 48}}
      />
      <View style={{marginLeft: 15, marginTop: 5}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          Bid placed by {item.name}
        </Text>
        <Text style={{fontSize: 11, color: 'black', fontWeight: 'bold'}}>
          {item.date}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          right: 15,
          flexDirection: 'row',
          marginTop: 5,
        }}>
        <Image source={eth} style={{width: 24, height: 24}} />
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: 14,
          }}>
          {item.price}
        </Text>
      </View>
    </View>
  );
};

export default CurrentBid;
