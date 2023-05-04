import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import ScrollCardOne from '../assets/svg/ScrollCardOne.svg';
import ArrowLeft from '../assets/svg/ArrowLeft.svg';
import Alert from '../assets/svg/Alert.svg';
import Star from '../assets/svg/Star.svg';
import DirectUp from '../assets/svg/DirectUp.svg';
import Call from '../assets/svg/Call.svg';
import MenuItemsCombo from '../assets/svg/MenuItemsCombo.svg';
import BarCode from '../assets/svg/BarCode.svg';
import Start from '../assets/svg/Start.svg';
import End from '../assets/svg/End.svg';
import BookedDetainsImg from '../assets/svg/BookedDetainsImg.svg';

import AIChat from '../assets/svg/AIChat.svg';

import Styles from '../config/Styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const BookedDetail = ({navigation}) => {
  return (
    <ScrollView
      style={[Styles.container, {padding: hp('2%')}]}
      showsVerticalScrollIndicator={false}>
      <View style={Styles.detailHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BookATable');
          }}>
          <ArrowLeft height={hp('18%')} width={wp('15%')} />
        </TouchableOpacity>
        <Text style={Styles.detailHeaderTitle}>Detail</Text>
        <Alert height={hp('18%')} width={wp('15%')} />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={Styles.DetailMainContainer}>
        <View style={[Styles.imageContainer, {backgroundColor: '#FFFFFF'}]}>
          <ScrollCardOne
            height={hp('38%')}
            width={wp('75%')}
            style={[Styles.detailImage, {marginLeft: hp('-0.8%')}]}
          />
        </View>
        <View style={[Styles.imageContainer, {backgroundColor: '#FFFFFF'}]}>
          <ScrollCardOne
            height={hp('38%')}
            width={wp('75%')}
            style={Styles.detailImage}
          />
        </View>
      </ScrollView>
      <View style={Styles.detailKmContainer}>
        <View>
          <Text style={Styles.nameKm}>The Eighteen Restaurant</Text>
          <View style={Styles.ratingContainer}>
            <Star height={hp('4%')} width={wp('5%')} />
            <Text style={Styles.rating}>4.5</Text>
          </View>
        </View>
        <View style={Styles.distanceContainer}>
          <Text style={Styles.distance}>5 Km</Text>
        </View>
      </View>

      <View style={Styles.DirectionAndCallContainer}>
        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => {
            navigation.navigate('Direction');
          }}>
          <DirectUp height={hp('2.8%')} width={wp('5%')} />
          <Text style={Styles.directionButtonText}>Get Directions</Text>
        </TouchableOpacity>

        <View style={Styles.buttonContainer}>
          <Call height={hp('3%')} width={wp('5%')} />
          <Text style={Styles.directionButtonText}>Call For Info</Text>
        </View>
      </View>

      <View style={Styles.barCodeContainer}>
        <View style={Styles.barCodeHeader}>
          <Text style={Styles.barCodeheaderText}>Menu</Text>
        </View>
        <View style={Styles.menuItemsBarCode}>
          <BarCode height={hp('8%')} width={wp('15%')} />
          <MenuItemsCombo height={hp('8%')} width={wp('35%')} />
        </View>
      </View>

      <View style={Styles.bookedRequestContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Start height={hp('4%')} width={wp('10%')} />
          <View style={{marginTop: hp('-1.5%')}}>
            <Text style={Styles.bookedTrackText}>Booking Request sent</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <End height={hp('3%')} width={wp('10%')} />

          <View>
            <Text style={[Styles.bookedTrackText, {marginTop: hp('-0.8%')}]}>
              Processing Request
            </Text>
          </View>
        </View>
        <View style={Styles.bookedTrackTextContainer}>
          <Text style={[Styles.bookedTrackText, {fontSize: hp('1.5%')}]}>
            Restaurant is Processing your
          </Text>
          <Text style={[Styles.bookedTrackText, {fontSize: hp('1.5%')}]}>
            request. this may take up to 5min
          </Text>
        </View>
      </View>
      <View style={Styles.barCodeContainer}>
        <View style={Styles.bookingDetailsContainer}>
          <View style={Styles.bookingDetailsTitleContainer}>
            <Text style={Styles.bookingDetailsTitle}>Booking Details</Text>
          </View>
          <View>
            <View>
              <Text style={Styles.bookingDetailsLabelText}>Date</Text>
              <Text style={Styles.bookingDetailsText}>
                April 13, 2023 at 4:30
              </Text>
            </View>
            <View style={Styles.bookingDetailsTextRow}>
              <View style={Styles.bookingDetailsGuestsContainer}>
                <Text style={Styles.bookingDetailsLabelText}>Guests</Text>
                <Text style={Styles.bookingDetailsText}>4</Text>
                <Text style={Styles.bookingDetailsLabelText}>Phone Number</Text>
                <Text style={Styles.bookingDetailsText}>+91 8839039838</Text>
              </View>
              <View style={Styles.bookingDetailsIconContainer}>
                <AIChat height={hp('14%')} width={wp('25%')} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={Styles.restaurantDetailsText}>Restaurant Details</Text>
        <View style={{alignItems: 'center', marginBottom: hp('3%')}}>
          <BookedDetainsImg height={hp('28%')} width={wp('100%')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default BookedDetail;
