import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Logo from './src/screens/Logo';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
import Detail from './src/screens/Detail';
import Direction from './src/screens/Direction';
import Book from './src/screens/Book';
import BottomNavBar from './src/components/BottomNavBar';
import BookATable from './src/screens/BookATable';
import MyBooking from './src/screens/MyBooking';
import BookedDetail from './src/screens/BookedDetail';
import {Screen} from 'react-native-screens';
import Screens from './src/screens/Screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Logo" component={Logo} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Direction" component={Direction} />
          <Stack.Screen name="Book" component={Book} />
          <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
          <Stack.Screen name="BookATable" component={BookATable} />
          <Stack.Screen name="MyBooking" component={MyBooking} />
          <Stack.Screen name="BookedDetail" component={BookedDetail} />
          <Stack.Screen name="Screens" component={Screens} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
