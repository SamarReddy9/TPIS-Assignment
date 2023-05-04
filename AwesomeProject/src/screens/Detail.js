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

import Styles from '../config/Styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Detail = ({navigation}) => {
  return (
    <View style={[Styles.container, {padding: hp('2%')}]}>
      <View style={Styles.detailHeader}>
        <ArrowLeft height={hp('18%')} width={wp('15%')} />
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
        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => {
            navigation.navigate('Direction');
          }}>
          <Call height={hp('3%')} width={wp('5%')} />

          <Text style={Styles.directionButtonText}>Call For Info</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.barCodeContainer}>
        <View style={Styles.barCodeHeader}>
          <Text style={Styles.barCodeheaderText}>Menu</Text>
        </View>
        <View style={Styles.menuItemsBarCode}>
          <MenuItemsCombo height={hp('8%')} width={wp('35%')} />
          <BarCode height={hp('8%')} width={wp('15%')} />
        </View>
      </View>

      <View style={Styles.reserveContainer}>
        <Text style={Styles.reserveText}>1/10 tables available now</Text>
        <TouchableOpacity
          style={Styles.reserveButton}
          onPress={() => {
            navigation.navigate('Book');
          }}>
          <Text style={Styles.reserveButtonText}>Reserve a Table</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;
