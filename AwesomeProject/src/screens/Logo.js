import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LogoImage from '../assets/svg/LogoImage.svg';
import Styles from '../config/Styles';

const Logo = ({navigation}) => {
  return (
    <>
      <View style={Styles.logoMainContainer}>
        <View style={Styles.logoContainer}>
          <LogoImage
            height={hp('100%')}
            width={wp('100%')}
            style={[Styles.logoImage, {transform: [{scale: 1.3}]}]}
          />
          <View style={Styles.buttonLogoContainer}>
            <TouchableOpacity
              style={Styles.startButtonLogo}
              onPress={() => navigation.navigate('Login')}>
              <Text style={Styles.buttonTextLogo}>START</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.screensButtonLogo}
              onPress={() => navigation.navigate('Screens')}>
              <Text style={Styles.buttonTextLogo}>SCREENS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Logo;
