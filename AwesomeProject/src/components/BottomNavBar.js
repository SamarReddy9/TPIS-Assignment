import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Home from '../assets/svg/Home.svg';
import Map from '../assets/svg/Map.svg';
import Calendar from '../assets/svg/Calendar.svg';
import Favourite from '../assets/svg/Favourite.svg';
import Profile from '../assets/svg/Profile.svg';

import Styles from '../config/Styles';

const BottomNavBar = ({navigation}) => {
  return (
    <View style={Styles.bottomNavBar}>
      <TouchableOpacity style={Styles.icon}>
        <Home />
      </TouchableOpacity>
      <View style={Styles.icon}>
        <Map />
      </View>
      <View style={Styles.icon}>
        <Calendar />
      </View>
      <View style={Styles.icon}>
        <Favourite />
      </View>
      <View style={Styles.icon}>
        <Profile />
      </View>
    </View>
  );
};

export default BottomNavBar;
