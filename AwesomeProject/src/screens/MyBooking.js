import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Alert from '../assets/svg/Alert.svg';
import MyBookingOne from '../assets/svg/MyBookingOne.svg';
import MyBookingTwo from '../assets/svg/MyBookingTwo.svg';
import BottomNavBar from '../components/BottomNavBar';
import Styles from '../config/Styles';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const MyBooking = ({navigation}) => {
  return (
    <View style={[Styles.container, {padding: hp('2%')}]}>
      <View style={Styles.detailHeader}>
        <></>
        <Text style={[Styles.detailHeaderTitle, {marginLeft: hp('10%')}]}>
          Book A Table
        </Text>
        <View style={{marginRight: hp('2%')}}>
          <Alert height={hp('18%')} width={wp('15%')} />
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <View>
          <MyBookingOne height={hp('25%')} width={wp('85%')} />
        </View>
        <View>
          <MyBookingTwo height={hp('25%')} width={wp('85%')} />
        </View>
      </View>

      <TouchableOpacity
        style={{marginTop: hp('37%')}}
        onPress={() => navigation.navigate('BookedDetail')}>
        <BottomNavBar />
      </TouchableOpacity>
    </View>
  );
};

export default MyBooking;
