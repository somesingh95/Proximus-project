import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-navigation';
import { ThemeContext } from '../../../App';
import { primaryDarkColor } from '../../assets/colors';
import styles from './styles';

const EmptyState = ({
    navigation,
}) => {
    const { setTheme, theme } = React.useContext(ThemeContext);
    let isDarkMode = theme === 'Dark';

    let emptyIcon = require("../../assets/image/noData.png");
    
    return (
    <View style={styles.emptyContainer}>
           <Image source={emptyIcon} style={styles.emptyIcon} resizeMode="contain"/>
           <Text style={[styles.emptyText,{color:isDarkMode ? "white" :"black"}]}>
              Oops! no devices found.
           </Text>
           <Text style={[styles.emptyText,{color:isDarkMode ? "white" :"black"}]}>
              No problem you can add here.
           </Text>
    </View>
);
}

export default EmptyState;
