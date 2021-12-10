import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToList, editCurrentItem } from '../../actions';
import styles from './styles';
import HeaderPlain from '../../components/header';
import QRCode from 'react-native-qrcode-svg';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ThemeContext } from '../../../App';
import { primaryDarkColor } from '../../assets/colors';

let rightICon =  require("../../assets/image/active.png")

const DeviceView = ({
    navigation,
}) => {
    const [deviceName, setDeviceName] = useState('');
    const [platform, setPlatForm] = useState('');
    const [currentOwner, setCurrentOwner] = useState('');
    const [barcodeData, setBarCodeData] = useState('');
    const [active, setActive] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);

    const route = useRoute();
    const { setTheme, theme } = React.useContext(ThemeContext);
    let isDarkMode = theme === 'Dark';



    useEffect(() => {
        let params = route?.params;
        if (params) {
            console.log("Route", params);
            let device = params?.device;
            setIsEditMode(true);
            setCurrentOwner(device?.owner)
            setDeviceName(device?.deviceName)
            setPlatForm(device?.platform)
            setActive(device?.active)

            let barCodeData = {
                deviceName: device?.deviceName,
                deviceOwner: device?.owner,
                platform: device?.platform,
                platform: device?.active
            }
            setBarCodeData(barCodeData)
        }

    }, [])
    const onBackPressed = () => {
        navigation.pop();
    }
    const onUpdatePressed = () => {
        let params = route?.params;
        if (params) {
            let device = params?.device;
            navigation.navigate("DeviceDetail", { editDevice: device })
        }
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? primaryDarkColor : "white" }]}>
            <HeaderPlain title={'Proximus'} navigation={navigation} isBackEnabled={true} />
            <View style={styles.barcodeContainer}>
                <QRCode
                    value={JSON.stringify(barcodeData)}
                    size={heightPercentageToDP(25)}
                />
            </View>
            <View style={styles.formContainer}>
                <TouchableOpacity style={styles.textInputContainer}>
                    <Text style={[styles.textFields, { color: isDarkMode ? "white" : "black" }]}>
                        Device Name: {deviceName}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textInputContainer}>
                    <Text style={[styles.textFields, { color: isDarkMode ? "white" : "black" }]}>
                        Platform: {platform}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.textInputContainer}>
                    <Text style={[styles.textFields, { color: isDarkMode ? "white" : "black" }]}>
                        Owner: {currentOwner}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textInputContainer}>
                    <Text style={[styles.textFields, { color: isDarkMode ? "white" : "black" }]}>
                        State: {active ? "Active" : "Inactive"}
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.actionContainer}>
   
                <TouchableOpacity style={[styles.buttonContainer, { borderColor: isDarkMode ? "white" : "green" }]} onPress={() => onUpdatePressed()}>
                    <Text style={[styles.buttonText, { color: isDarkMode ? "white" : "green" }]}>
                        Update
                    </Text>
                    <Image source={rightICon} style={{ width: widthPercentageToDP(7), height: heightPercentageToDP(7),marginLeft:5 }} resizeMode="contain" />

                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default DeviceView;
