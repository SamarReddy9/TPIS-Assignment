import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import MapLocation from '../assets/svg/MapLocation.svg';
import Search from '../assets/svg/Search.svg';
import LocationPoint from '../assets/svg/LocationPoint.svg';
import LocationCardOne from '../assets/svg/LocationCardOne.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Styles from '../config/Styles';
import BottomNavBar from '../components/BottomNavBar';

const Direction = () => {
  return (
    <View style={Styles.directionContainer}>
      <MapLocation style={Styles.directionBackgroundImage} />
      <View style={{padding: hp('2%')}}>
        <View style={Styles.directionIconContainer}>
          <Search height={hp('4%')} width={wp('4.5%')} />
          <Text style={Styles.directionIconText}>Search</Text>
        </View>
      </View>
      <View style={{marginTop: hp('30%')}}>
        <LocationPoint height={hp('25%')} width={wp('100%')} />
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={Styles.DetailMainContainer}>
        <View style={Styles.locationCardImagesContainer}>
          <LocationCardOne />
        </View>
        <View style={Styles.locationCardImagesContainer}>
          <LocationCardOne />
        </View>
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

export default Direction;
