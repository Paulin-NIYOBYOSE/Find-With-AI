import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './screens/FirstPage';
import LoginPage from './screens/LoginPage';
import PhoneVerificationPage from './screens/PhoneVerificationPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="PhoneVerificationPage" component={PhoneVerificationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
