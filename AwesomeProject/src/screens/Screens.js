import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Styles from '../config/Styles';

const Screens = ({navigation}) => {
  return (
    <View style={Styles.containerScreen}>
      <TouchableOpacity
        style={Styles.linkScreen}
        onPress={() => {
          navigation.navigate('Logo');
        }}>
        <Text style={Styles.linkTextScreen}>Logo Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.linkScreen}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={Styles.linkTextScreen}>Login Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.linkScreen}
        onPress={() => {
          navigation.navigate('Main');
        }}>
        <Text style={Styles.linkTextScreen}>Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.linkScreen}
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Text style={Styles.linkTextScreen}>Detail Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.linkScreen}
        onPress={() => {
          navigation.navigate('Direction');
        }}>
        <Text style={Styles.linkTextScreen}>Direction Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.linkScreen}
        onPress={() => {
          navigation.navigate('Book');
        }}>
        <Text style={Styles.linkTextScreen}>Select Date & Time Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.linkScreen}
        onPress={() => {
          navigation.navigate('BookATable');
        }}>
        <Text style={Styles.linkTextScreen}>Book A Table Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.linkScreen}
        onPress={() => {
          navigation.navigate('MyBooking');
        }}>
        <Text style={Styles.linkTextScreen}>My Booking Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.linkScreen}
        onPress={() => {
          navigation.navigate('BookedDetail');
        }}>
        <Text style={Styles.linkTextScreen}>My Booking Details Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screens;
