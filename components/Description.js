import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import eth from '../assets/icons/eth.png';

const Description = ({data}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <View style={{margin: 15}}>
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
              {data.name}
            </Text>
            <Text style={{fontSize: 14, color: 'gray', marginTop: 5}}>
              by {data.creator}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            right: 20,
            marginTop: 15,
          }}>
          <Image source={eth} style={{width: 24, height: 24}} />
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 16,
            }}>
            {data.price}
          </Text>
        </View>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          Description
        </Text>
        <Text
          style={{
            marginTop: 5,
            color: 'black',
            fontSize: 14,
          }}
          numberOfLines={showFullDescription ? undefined : 3}>
          {data.description}
        </Text>
        {!showFullDescription && (
          <TouchableOpacity onPress={toggleDescription}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Read more</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Description;
