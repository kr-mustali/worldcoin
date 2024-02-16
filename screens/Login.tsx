import React from 'react';
import {Button, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';

const Login = () => {
  const {authorize} = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{margin: 20}}>
      <Button onPress={onPress} title="Log in" />
    </View>
  );
};

export default Login;
