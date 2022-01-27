import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUp} from './screens';
import Tabs from './navigation/tabs';
import {StatusBar} from 'react-native';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={'transparent'}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'SignUp'}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
