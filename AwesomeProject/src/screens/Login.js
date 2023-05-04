import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Styles from '../config/Styles';
import {TextInput} from 'react-native';
import EyeSlash from '../assets/svg/EyeSlash.svg';
import Facebook from '../assets/svg/Facebook.svg';
import Google from '../assets/svg/Google.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Login = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[Styles.container, {backgroundColor: '#0D000000'}]}>
      <View>
        <Text style={Styles.title}>Login Now</Text>
        <Text style={Styles.subtitle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

        <TouchableOpacity
          style={Styles.socialContainer}
          onPress={() => {
            navigation.navigate('Logo');
          }}>
          <View
            style={[Styles.socialSVGImagesContainer, {marginLeft: hp('13%')}]}>
            <View style={Styles.facebookSVGContainer}>
              <Facebook height={hp('3%')} width={wp('5%')} />
            </View>
            <Text style={Styles.socialText}>Facebook</Text>
          </View>
          <View
            style={[
              Styles.socialSVGImagesContainer,
              ,
              {marginRight: hp('13%')},
            ]}>
            <View style={Styles.googleSVGContainer}>
              <Google height={hp('4%')} width={wp('8%')} />
            </View>
            <Text style={Styles.socialText}>Google</Text>
          </View>
        </TouchableOpacity>

        <View style={Styles.inputContainer}>
          <View style={Styles.inputBox}>
            <TextInput style={Styles.input} value="+91 8839039838" />
          </View>
          <View style={Styles.inputBox}>
            <TextInput style={Styles.input} value="*********" />
            <EyeSlash height={hp('5%')} width={wp('5%')} />
          </View>
        </View>

        <TouchableOpacity
          style={Styles.loginButtonContainer}
          onPress={() => {
            navigation.navigate('Main');
          }}>
          <Text style={Styles.loginText}>Login</Text>
        </TouchableOpacity>

        <View style={Styles.signupContainer}>
          <Text style={Styles.signupText}>Don't have an account?</Text>
          <Text style={[Styles.signupText, Styles.signupLink]}>SignUp</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
