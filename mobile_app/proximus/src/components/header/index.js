import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ThemeContext } from '../../../App';
import { primaryDarkColor } from '../../assets/colors';
import Floatingbutton from '../floatingButton';
import styles from './styles';
// import { responsiveWidth } from '../utils/Themes/metrics';

const HeaderPlain = ({
  navigation,
  title,
  subtitle,
  isBackEnabled,
  addButton,
}) => {

  const { setTheme, theme } = React.useContext(ThemeContext);
  let isDarkMode = theme === 'Dark';

  const onDarkLightModePressed = () => {
    let changedTheme = theme === 'Light' ? 'Dark' : 'Light';
    setTheme(changedTheme)
    AsyncStorage.setItem("com.proximus.theme", changedTheme);
  }

  const onBackPressed = () => {
    navigation.pop();
  }

  let darkLightIcon = isDarkMode ? require("../../assets/image/lightIcon.png") : require("../../assets/image/darkIcon.png")
  let backIcon = isDarkMode ? require("../../assets/image/leftIconDark.png") : require("../../assets/image/leftIconLight.png")


  return (
    <View
      style={[styles.headerContainer, { backgroundColor: isDarkMode ? primaryDarkColor : '#ffff' }]}>
      {isBackEnabled
        ?
        <TouchableOpacity onPress={() => onBackPressed()}>
          <Image source={backIcon} style={{ width: widthPercentageToDP(6), height: heightPercentageToDP(5) }} resizeMode="contain" />
        </TouchableOpacity>
        :
        null
      }
      <TouchableOpacity style={{
        height: heightPercentageToDP(8), alignItems: "center", justifyContent: "center", width: widthPercentageToDP(75)
      }}  >

        <Text
          style={[styles.headerText, { color: isDarkMode ? '#ffff' : 'green' }]}>
          {title}
        </Text>

      </TouchableOpacity>
      <View style={styles.imageContainer}>

        <TouchableOpacity onPress={() => onDarkLightModePressed()}>
          <Image source={darkLightIcon} style={{ width: widthPercentageToDP(7), height: heightPercentageToDP(7) }} resizeMode="contain" />
        </TouchableOpacity>
        {
          addButton?
        
        <Floatingbutton navigation={navigation} />
        :
        null
}

      </View>
    </View>
  );
}

export default HeaderPlain;
