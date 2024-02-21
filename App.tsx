/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';
import Login from './screens/Login';
import {Auth0Provider} from 'react-native-auth0';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Auth0Provider
      domain={'dev-y64lug16cxllp0o8.us.auth0.com'}
      clientId={'LptaH5Z7jjozKuEXD0upi33Bo157GaYJ'}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Auth0Provider>
  );
}

export default App;
