import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container:{
        height:heightPercentageToDP(4),
        width:heightPercentageToDP(4),
        borderRadius:heightPercentageToDP(7)/2,
        alignItems:"center",
        justifyContent:"center",
        marginLeft:10
    },
    addIcon:{
        width:widthPercentageToDP(4),
        height:heightPercentageToDP(4)
    }
})

export default styles;