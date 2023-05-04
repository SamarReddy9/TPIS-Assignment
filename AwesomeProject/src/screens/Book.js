import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import Styles from '../config/Styles';
import ArrowLeft from '../assets/svg/ArrowLeft.svg';
import Alert from '../assets/svg/Alert.svg';
import IncDec from '../assets/svg/IncDec.svg';

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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={Styles.DetailMainContainer}>
        <View style={Styles.bookATableContainer}>
          <Text style={[Styles.BookATableText, {fontSize: wp('4%')}]}>
            Guests
          </Text>

          <View style={Styles.incDecContainer}>
            <IncDec height={hp('8%')} width={wp('25%')} />
          </View>
        </View>

        <View style={Styles.dateContainer}>
          <View style={Styles.dateRow}>
            <Text style={Styles.dateLabel}>Date</Text>
            <View
              style={[
                Styles.dayOfWeek,
                {
                  paddingLeft: hp('3%'),
                  paddingRight: hp('3%'),
                  borderRadius: hp('1%'),
                  paddingHorizontal: hp('1.5%'),
                  paddingVertical: hp('0.8%'),
                  marginHorizontal: hp('1%'),
                  borderRadius: hp('1%'),
                  borderColor: '#1A3D3989',
                  borderWidth: hp('0.1%'),
                  marginRight: hp('-0.5%'),
                },
              ]}>
              <Text style={Styles.dayOfWeekText}>Jan</Text>
            </View>
          </View>
          <View style={Styles.dateRow}>
            <View>
              <Text style={Styles.dateLabel}>Set</Text>
              <Text style={Styles.dateValue}>20</Text>
            </View>
            <View>
              <Text style={Styles.dateLabel}>Sun</Text>
              <Text style={Styles.dateValue}>21</Text>
            </View>
            <View style={[Styles.dayOfWeek, {backgroundColor: '#FF9E00'}]}>
              <Text style={Styles.dayOfWeekText}>Mon</Text>
              <Text style={Styles.dateValue}>22</Text>
            </View>
            <View>
              <Text style={Styles.dateLabel}>Tue</Text>
              <Text style={Styles.dateValue}>23</Text>
            </View>
            <View>
              <Text style={Styles.dateLabel}>Tue</Text>
              <Text style={Styles.dateValue}>24</Text>
            </View>
            <View>
              <Text style={Styles.dateLabel}>Wed</Text>
              <Text style={Styles.dateValue}>25</Text>
            </View>
          </View>
        </View>

        <View style={Styles.timeMainContainer}>
          <Text style={Styles.timeTitle}>Time</Text>
          <View style={Styles.timeContainer}>
            <View style={Styles.timeSlot}>
              <Text style={Styles.timeSlotText}>10:30</Text>
            </View>
            <View style={Styles.timeSlot}>
              <Text style={Styles.timeSlotText}>12:00</Text>
            </View>
            <View style={Styles.timeSlot}>
              <Text style={Styles.timeSlotText}>01:30</Text>
            </View>
            <View style={Styles.timeSlot}>
              <Text style={Styles.timeSlotText}>02:30</Text>
            </View>
          </View>
          <View style={Styles.timeContainer}>
            <View style={Styles.timeSlot}>
              <Text style={Styles.timeSlotText}>03:00</Text>
            </View>
            <View style={Styles.timeSlot}>
              <Text style={Styles.timeSlotText}>04:00</Text>
            </View>
            <View style={Styles.timeSlot}>
              <Text style={Styles.timeSlotText}>05:00</Text>
            </View>
            <View style={Styles.timeSlot}>
              <Text style={Styles.timeSlotText}>06:00</Text>
            </View>
          </View>
          <View style={Styles.timeContainer}>
            <View style={Styles.timeSlot}>
              <Text style={Styles.timeSlotText}>07:00</Text>
            </View>
            <View style={Styles.timeSlot}>
              <Text style={Styles.timeSlotText}>08:00</Text>
            </View>
            <View style={Styles.timeSlot}>
              <Text style={Styles.timeSlotText}>09:00</Text>
            </View>
            <View style={Styles.timeSlot}>
              <Text style={Styles.timeSlotText}>10:00</Text>
            </View>
          </View>
        </View>

        <View style={Styles.cancelConformContainer}>
          <View
            style={Styles.cancelButton}
            onPress={() => {
              navigation.navigate('BookATable');
            }}>
            <Text style={[Styles.cancelConformButtonText, {color: '#776BF1'}]}>
              Cancel
            </Text>
          </View>
          <TouchableOpacity
            style={Styles.conformButton}
            onPress={() => {
              navigation.navigate('BookATable');
            }}>
            <Text style={[Styles.cancelConformButtonText, {color: '#FFFFFF'}]}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookATable;
