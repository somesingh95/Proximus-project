import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { ThemeContext } from '../../../App';
import { searchFilterEnetered } from '../../actions';
import { primaryDarkColor } from '../../assets/colors';
import styles from './styles';

const SearchBar = ({
    navigation,
}) => {
    const [searchText, setSearchText] = useState('');
    const { setTheme, theme } = React.useContext(ThemeContext);
    let isDarkMode = theme === 'Dark';

    const dispatch = useDispatch();

    const onSearchFilterEneterd = (text) => {
        setSearchText(text);
        dispatch(searchFilterEnetered({ json: text }))
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? primaryDarkColor : "white" }]}>
                <TouchableOpacity style={styles.textInputContainer}>
                    <TextInput
                        onChangeText={(text) => onSearchFilterEneterd(text)}
                        value={searchText}
                        placeholder='Search Device by Name,Owner or Platform...'
                        placeholderTextColor={isDarkMode ? "white" : "grey"}
                        style={{
                            color: isDarkMode ? "white" : "black",
                            height:heightPercentageToDP(8)
                        }}
                    />
                </TouchableOpacity>
           
        </SafeAreaView>
    )
};

export default SearchBar;
