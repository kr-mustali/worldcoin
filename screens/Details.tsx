/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import DetailHeader from '../components/DetailHeader';
import Info from '../components/Info';
import Description from '../components/Description';
import CurrentBid from '../components/CurrentBid';

const Details = ({route, navigation}: any) => {
  const {data} = route.params;

  return (
    <View>
      <FlatList
        data={data.bids}
        renderItem={({item}) => <CurrentBid item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <DetailHeader data={data} navigation={navigation} />
            <Info />
            <Description data={data} />
            <View style={{marginLeft: 15}}>
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#001F2D',
                  }}>
                  Current Bid
                </Text>
              )}
            </View>
          </>
        }
      />
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 50,
          backgroundColor: '#001F2D',
          position: 'absolute',
          bottom: 0,
          margin: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
          shadowColor: '#fff',
          elevation: 14,
          height: 50,
          padding: 5,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity>
          <Text style={{color: '#fff'}}>Place a Bid</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
