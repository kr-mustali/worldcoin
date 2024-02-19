/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {NFTData} from '../constants/data';
import NFTCard from '../components/NFTCard';
import HomeHeader from '../components/Header';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}: any) => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value: string) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={{zIndex: 0}}>
        <FlatList
          data={nftData}
          renderItem={({item}) => (
            <NFTCard navigation={navigation} data={item} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
        />
      </View>
      {/* <View
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
          height: 50,
          padding: 5,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity>
          <Icon name="home" size={28} color="#fff" style={{marginRight: 10}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="pie-chart"
            size={28}
            color="#fff"
            style={{marginRight: 10, marginLeft: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="shopping-cart"
            size={28}
            color="#fff"
            style={{marginRight: 10, marginLeft: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="heart" size={28} color="#fff" style={{marginLeft: 10}} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Home;
