import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ArrowLeft from '../assets/svg/ArrowLeft.svg';
import Alert from '../assets/svg/Alert.svg';
import TableA from '../assets/svg/TableA.svg';
import TableB from '../assets/svg/TableB.svg';
import TableC from '../assets/svg/TableC.svg';
import TableD from '../assets/svg/TableD.svg';
import Styles from '../config/Styles';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const BookATable = ({navigation}) => {
  return (
    <View style={[Styles.container, {padding: hp('2%')}]}>
      <View style={Styles.detailHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Detail');
          }}>
          <ArrowLeft height={hp('18%')} width={wp('15%')} />
        </TouchableOpacity>
        <Text style={Styles.detailHeaderTitle}>Book A Table</Text>
        <Alert height={hp('18%')} width={wp('15%')} />
      </View>

      <View style={Styles.dateRow}>
        <View>
          <View style={Styles.timeContainer}>
            <View style={[Styles.timeSlot, {borderColor: '#FF9E00'}]}>
              <Text style={Styles.timeSlotText}>2 Seats</Text>
            </View>
            <View style={[Styles.timeSlot, {borderColor: '#FF9E00'}]}>
              <Text style={Styles.timeSlotText}>3 Seats</Text>
            </View>
            <View style={[Styles.timeSlot, {backgroundColor: '#FF9E00'}]}>
              <Text style={[Styles.timeSlotText, {color: '#FFFFFF'}]}>
                4 Seats
              </Text>
            </View>
            <View style={[Styles.timeSlot, {borderColor: '#FF9E00'}]}>
              <Text style={Styles.timeSlotText}>5 Seats</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{alignItems: 'center', marginTop: hp('7%')}}>
        <View>
          <TableA />
        </View>
        <View>
          <TableB />
        </View>
        <View>
          <TableC />
        </View>
        <View>
          <TableD />
        </View>
      </View>

      <View style={Styles.reserveContainer}>
        <Text style={Styles.reserveText}>1/10 tables available now</Text>
        <TouchableOpacity
          style={Styles.reserveButton}
          onPress={() => {
            navigation.navigate('MyBooking');
          }}>
          <Text
            style={[
              Styles.reserveButtonText,
              {marginLeft: hp('4%'), marginRight: hp('4%')},
            ]}>
            Booking
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookATable;
