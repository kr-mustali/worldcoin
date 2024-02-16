/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import DetailHeader from '../components/DetailHeader';
import Info from '../components/Info';
import Description from '../components/Description';

const Details = ({route, navigation}: any) => {
  const {data} = route.params;

  return (
    <View>
      <FlatList
        data={data.bids}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <DetailHeader data={data} navigation={navigation} />
            <Info />
            <Description data={data} />
          </>
        }
      />
    </View>
  );
};

export default Details;
