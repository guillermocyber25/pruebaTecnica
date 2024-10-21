import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/views/home/Home';
import { RegisterScreen } from './src/views/register/Register';
import ProductScreen from './src/views/product/Product';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
         <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: 'New Product'
          }}
        />
         <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{
            headerShown: true,
            title: 'Product'
          }}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App