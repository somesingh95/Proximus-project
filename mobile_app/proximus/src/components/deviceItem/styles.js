import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP(100),
        borderBottomWidth: 1,
        paddingLeft: widthPercentageToDP(3),
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
        marginTop:5
    },
    iconContainer: {
        width: widthPercentageToDP(10),
        height: heightPercentageToDP(8),
        alignItems: "flex-start",
        justifyContent: "center",
    },
    textContainer: {
        width: widthPercentageToDP(45),
        height: heightPercentageToDP(8),
        alignItems: "flex-start",
        justifyContent: "center"
    },
    actionContainer: {
        width: widthPercentageToDP(35),
        height: heightPercentageToDP(8),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    controlContainer:{
        width:widthPercentageToDP(35),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    deviceHeader: {
        fontSize: 18,
        fontFamily: "Helvetica",
        fontWeight: "bold"
    },
    platform: {
        fontSize: 14,
        fontFamily: "Helvetica",

    }, buttonContainer: {
        width: widthPercentageToDP(15),
        height: heightPercentageToDP(5),
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontFamily: "Helvetica",
        fontSize: 16
    },
    iconStyle: { 
        width: widthPercentageToDP(5), 
        height: heightPercentageToDP(6) 
    }

})

export default styles;