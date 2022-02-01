import React from 'react';
import Home from './src/views/Home';
import Task from './src/views/Task';

// import {createAppConteiner, createSwitchNavigator} from 'react-native';

// const Routes = createAppConteiner(createSwitchNavigator({Home,Task})
// );

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="/" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="/task" component={Task} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

