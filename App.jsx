
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './src/Home/Home';
import DigitalClock from './src/digitalClock/DigitalClock';
import Stopwatch from './src/stopWatch/Stopwatch';
import CountdownTimer from './src/countdownTimer/CountdownTimer';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />

      <Stack.Screen
        name="DigitalClock"
        component={DigitalClock}
        options={{ title: 'Digital Clock' }}
      />

      <Stack.Screen
        name="Stopwatch"
        component={Stopwatch}
        options={{ title: 'Stopwatch' }}
      />

      <Stack.Screen
        name="CountdownTimer"
        component={CountdownTimer}
        options={{ title: 'Countdown Timer' }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
