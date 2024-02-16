/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import search from '../assets/icons/search.png';
import logo from '../assets/images/logo.png';
import {useAuth0} from 'react-native-auth0';

import person01 from '../assets/images/person01.png';

const HomeHeader = ({onSearch}) => {
  const {authorize} = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={logo}
          resizeMode="contain"
          style={{width: 90, height: 25}}
        />

        <View style={{width: 45, height: 45}}>
          <TouchableOpacity
            onPress={onPress}
            style={{position: 'absolute', right: 10, width: 100}}>
            <Text
              style={{
                backgroundColor: '#fff',
                color: 'black',
                padding: 10,
                borderRadius: 20,
                textAlign: 'center',
              }}>
              Logn IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginVertical: 14}}>
        <Text
          style={{
            fontSize: 12,
            color: '#fff',
          }}>
          Hello John 👋
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            marginTop: 4,
            fontWeight: '600',
          }}>
          Let’s find masterpiece Art
        </Text>
      </View>

      <View style={{marginTop: 14}}>
        <View
          style={{
            width: '100%',
            borderRadius: 14,
            backgroundColor: 'grey',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 14,
            paddingVertical: 10,
          }}>
          <Image
            source={search}
            resizeMode="contain"
            style={{width: 20, height: 20, marginRight: 8}}
          />
          <TextInput placeholder="Search NFTs" onChangeText={onSearch} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 14,
  },
});

export default HomeHeader;
