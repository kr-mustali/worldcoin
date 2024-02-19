import React from 'react';
import {Text, View} from 'react-native';

const Description = ({data}) => {
  return (
    <View style={{margin: 15}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
            {data.name}
          </Text>
          <Text>by {data.creator}</Text>
        </View>
      </View>
    </View>
  );
};

export default Description;
