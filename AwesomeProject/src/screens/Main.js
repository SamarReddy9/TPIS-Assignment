import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import ProfilePic from '../assets/svg/ProfilePic.svg';
import Alert from '../assets/svg/Alert.svg';
import Search from '../assets/svg/Search.svg';
import Filter from '../assets/svg/Filter.svg';
import MenuCard from '../assets/svg/MenuCard.svg';
import SlideDots from '../assets/svg/SlideDots.svg';
import Restaurant from '../assets/svg/Restaurant.svg';
import Gym from '../assets/svg/Gym.svg';
import Clothes from '../assets/svg/Clothes.svg';
import Salon from '../assets/svg/Salon.svg';
import MenuCardTwo from '../assets/svg/MenuCardTwo.svg';
import MenuCardThree from '../assets/svg/MenuCardThree.svg';
import BottomNavBar from '../components/BottomNavBar';
import Styles from '../config/Styles';

import FilterModalLine from '../assets/svg/FilterModalLine.svg';
import Controler from '../assets/svg/Controler.svg';
import OffOn from '../assets/svg/OffOn.svg';
import RightArrow from '../assets/svg/RightArrow.svg';
import Line from '../assets/svg/Line.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Main = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={[Styles.container, {backgroundColor: '#FFFFFF'}]}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={Styles.topBar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <ProfilePic
              style={Styles.profilePic}
              height={hp('7%')}
              width={wp('39%')}
            />
          </TouchableOpacity>
          <Alert style={Styles.alert} height={hp('7.5%')} width={wp('16%')} />
        </View>

        <View style={Styles.searchBarContainer}>
          <View style={Styles.SearchAndTextInput}>
            <Search height={hp('3%')} width={wp('5%')} />
            <TextInput style={Styles.searchInput} placeholder="Search" />
          </View>

          <View>
            <Filter
              height={hp('6%')}
              width={wp('15%')}
              style={Styles.filterIcon}
            />
          </View>
        </View>

        <View style={Styles.menuCardContainer}>
          <MenuCard height={hp('22%')} width={wp('100%')} />
          <SlideDots style={Styles.slideDots} />
        </View>

        <View style={Styles.categoryContainer}>
          <Text style={Styles.categoryTitle}>Category</Text>
          <View style={Styles.categoryRow}>
            <View
              style={[Styles.categoryButton, Styles.categoryButtonSelected]}>
              <Restaurant style={Styles.categoryIcon} />
              <Text style={Styles.categoryButtonText}>Restaurant</Text>
            </View>

            <View style={Styles.categoryButton}>
              <Gym style={Styles.categoryIcon} />
              <Text style={Styles.categoryButtonText}>Gym</Text>
            </View>

            <View style={Styles.categoryButton}>
              <Clothes style={Styles.categoryIcon} />
              <Text style={Styles.categoryButtonText}>Clothes</Text>
            </View>

            <View style={Styles.categoryButton}>
              <Salon style={Styles.categoryIcon} />
              <Text style={Styles.categoryButtonText}>Salon</Text>
            </View>
          </View>
        </View>

        <View style={Styles.menuCardContainer}>
          <View>
            <TouchableOpacity
              style={{zIndex: 1}}
              onPress={() => navigation.navigate('Detail')}>
              <MenuCardTwo
                style={Styles.menuCard}
                height={hp('22%')}
                width={wp('100%')}
              />
              <Text></Text>
            </TouchableOpacity>
          </View>

          <MenuCardThree
            style={Styles.menuCard}
            height={hp('17%')}
            width={wp('100%')}
          />
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={Styles.bottomBar}>
          <BottomNavBar navigation={navigation} />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={[Styles.modalContainer, Styles.modalContainer]}
          onPress={() => {
            setModalVisible(false);
            navigation.navigate('Detail');
          }}>
          <View style={Styles.modalActivityContainer}>
            <View style={Styles.modalTitleContainer}>
              <FilterModalLine style={Styles.filterModalLine} />
              <Text style={Styles.filterTitle}>Filter</Text>
            </View>
            <View style={Styles.filterOptions}>
              <View style={[Styles.filterOption, Styles.selectedFilterOption]}>
                <Text style={Styles.filterOptionText}>Location</Text>
              </View>
              <View style={Styles.filterOption}>
                <Text style={Styles.filterOptionText}>Sort By</Text>
              </View>
              <View style={Styles.filterOption}>
                <Text style={Styles.filterOptionText}>Cuisines</Text>
              </View>
              <View style={Styles.filterOption}>
                <Text style={Styles.filterOptionText}>Rating</Text>
              </View>
            </View>
            <Text style={Styles.discoverSettings}>DISCOVERT SETTINGS</Text>
            <View style={Styles.locationContainer}>
              <Text style={Styles.locationText}>Location</Text>
              <Text style={Styles.locationDetails}>Hamburg, Germany</Text>
              <View style={Styles.rightArrow}>
                <RightArrow />
              </View>
            </View>

            <View style={Styles.distanceContainerMain}>
              <View style={Styles.distanceHeader}>
                <Text style={Styles.distanceLabel}>Distance Preference</Text>
                <Text style={Styles.distanceValue}>100km</Text>
              </View>
              <View style={Styles.controlerContainer}>
                <Controler style={Styles.controler} />
                <Line />
              </View>
              <View style={Styles.toggleContainer}>
                <Text style={Styles.toggleLabel}>
                  Only show restaurants in this range
                </Text>
                <OffOn />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Main;
