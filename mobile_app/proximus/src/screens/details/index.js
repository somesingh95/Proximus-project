import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Switch, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToList, editCurrentItem } from '../../actions';
import styles from './styles';
import uuid from 'react-native-uuid';
import HeaderPlain from '../../components/header';
import { ThemeContext } from '../../../App';
import Toast from 'react-native-simple-toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { primaryDarkColor } from '../../assets/colors';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import { Picker } from '@react-native-picker/picker';
import { ANDROID, IOS, OTHER } from '../../assets/constants';
import ModalSelector from 'react-native-modal-selector'


let rightICon =  require("../../assets/image/active.png")


const platformList = [
    {key:0,label:ANDROID},
    {key:1,label:IOS},
    {key:2,label:OTHER},
]


const DeviceDetail = ({
    navigation,
}) => {
    const [deviceName, setDeviceName] = useState('');
    const [platform, setPlatForm] = useState('');
    const [currentOwner, setCurrentOwner] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false);

    const dispatch = useDispatch();
    const route = useRoute();
    const { setTheme, theme } = React.useContext(ThemeContext);
    let isDarkMode = theme === 'Dark';



    useEffect(() => {
        let params = route?.params;
        if (params) {
           
            let device = params?.editDevice;
            console.log("Route", device,new Date(device?.purchaseDate));
            setIsEditMode(true);
            setCurrentOwner(device?.owner)
            setDeviceName(device?.deviceName)
            setPlatForm(device?.platform)
            setDate(new Date(device?.purchaseDate))
            setIsActive(device?.active)
        }

    }, [])

    const onDeviceAdd = () => {
        let body = {
            _id: uuid.v4(),
            deviceName: deviceName,
            platform: platform,
            owner: currentOwner,
            purchaseDate:date.toUTCString(),
            active:isActive
        }
        Toast.show('Device added successfully...', Toast.LONG);
        dispatch(addItemToList({ json: body }));
        clearData();
        navigation.navigate('Home');
    }

    const onDeviceEdit = () => {
        let params = route?.params;
        let device = params?.editDevice;

        let body = {
            _id: device?._id,
            deviceName: deviceName,
            platform: platform,
            owner: currentOwner,
            purchaseDate:date.toUTCString(),
            active:isActive

        }
        Toast.show('Device updated successfully...', Toast.LONG);
        dispatch(editCurrentItem({ json: body }));
        clearData();
        navigation.navigate('Home');
    }

    const onCancelPressed = () => {
        navigation.navigate('Home')
    }

    const clearData = () => {
        setCurrentOwner('')
        setDeviceName('')
        setPlatForm('')
        setIsActive(false)
        setDate(new Date())
    }


    const onCallBackButton = () => {
   if(isEditMode){
       onDeviceEdit();

   }else{
       onDeviceAdd()
   }
    }


    return (


        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? primaryDarkColor : "white" }]}>
            <KeyboardAwareScrollView>

                <HeaderPlain title={'Proximus'} navigation={navigation}isBackEnabled={true} 
               />
                <View style={styles.headerContainer}>
                    <Text style={[styles.headerText, { color: isDarkMode ? "white" : "black" }]}>
                        {isEditMode ? 'Update Device' : 'Add Device'}
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={[styles.textInputContainer, { borderColor: isDarkMode ? "white" : "black" }]}>
                        <TextInput
                            onChangeText={(text) => setDeviceName(text)}
                            value={deviceName}
                            placeholder='Device Name'
                            placeholderTextColor={"grey"}
                            style={{
                                color: isDarkMode ? "white" : "black",
                                height: heightPercentageToDP(8)
                            }}
                        />
                    </View>
                    <View style={[styles.textInputContainer, { borderColor: isDarkMode ? "white" : "black" }]}>
                    <ModalSelector
                    data={platformList}
                    initValue="Select Device OS"
                    // supportedOrientations={['landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{ setPlatForm(option.label)}}>

                    <TextInput
                      style={{
                        color: isDarkMode ? "white" : "black",
                        height: heightPercentageToDP(8),
                        
                    }}
                    placeholderTextColor={"grey"}
                        editable={false}
                        placeholder="Select Device OS"
                        value={platform} />

                </ModalSelector>
                    </View>
                    <View style={[styles.textInputContainer, { borderColor: isDarkMode ? "white" : "black" }]}>
                        <TextInput
                            onChangeText={(text) => setCurrentOwner(text)}
                            value={currentOwner}
                            placeholder='Current Owner'
                            placeholderTextColor={"grey"}
                            style={{
                                color: isDarkMode ? "white" : "black",
                                height: heightPercentageToDP(8)
                            }}
                        />
                    </View>
                    <View style={styles.switchContainer}>
                        <View>
                            <Text style={[styles.textFields, { color: isDarkMode ? "white" : "black", paddingBottom: heightPercentageToDP(1) }]}>
                                Purchase Date:
                            </Text>
                            <TouchableOpacity style={[styles.textInputContainer, { borderColor: isDarkMode ? "white" : "black" }]} onPress={() => setOpen(true)}>
                                <Text style={[styles.textFields, { color: isDarkMode ? "white" : "black" }]}>
                                    {moment(date).format("DD/MM/YYYY")}
                                </Text>
                            </TouchableOpacity>
                            <DatePicker
                                modal
                                open={open}
                                date={date}
                                onConfirm={(date) => {
                                    setOpen(false)
                                    setDate(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.switchContainer}>
                        <Text style={[styles.textFields, { color: isDarkMode ? "white" : "black" }]}>
                            Device Active:
                        </Text>
                        <Switch style={styles.switch} value={isActive} onValueChange={() => setIsActive(!isActive)} />
                    </View>

                </View>
                <View style={styles.controllerContainer}>
                    {isEditMode
                        ?
                        <TouchableOpacity style={[styles.buttonContainer, { borderColor: isDarkMode ? "white" : "green" }]} onPress={() => onDeviceEdit()}>
                            <Text style={[styles.buttonText, { color: isDarkMode ? "white" : "green" }]}>
                                Update
                            </Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={[styles.buttonContainer, { borderColor: isDarkMode ? "white" : "green" }]} onPress={() => onDeviceAdd()}>
                            <Text style={[styles.buttonText, { color: isDarkMode ? "white" : "green" }]}>
                                Add
                            </Text>
                            <Image source={rightICon} style={{ width: widthPercentageToDP(7), height: heightPercentageToDP(7),marginLeft:5 }} resizeMode="contain" />

                        </TouchableOpacity>
                    }
                    
                </View>

            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default DeviceDetail;
