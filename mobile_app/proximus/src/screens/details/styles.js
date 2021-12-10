import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    headerContainer:{
        height:heightPercentageToDP(15),
        width:widthPercentageToDP(100),
        alignItems:"center",
        justifyContent:"center"
    },
    headerText:{
        fontWeight:"bold",
        fontFamily:"Helvetica",
        fontSize:32
    },
    formContainer:{
        height:heightPercentageToDP(60),
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    textInputContainer:{
        width:widthPercentageToDP(75),
        height:heightPercentageToDP(5),
        borderRadius:8,
        borderWidth:1,
        justifyContent:"center",
        paddingLeft:widthPercentageToDP(1)
    },
    textFields:{
        fontFamily:"Helvetica",
        fontSize:18
    },
    switchContainer:{
        width:widthPercentageToDP(75),
        height:heightPercentageToDP(5),
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center"
    },
    switch:{
        marginLeft:widthPercentageToDP(5)
    },
    buttonContainer:{
        borderWidth:1,
        borderRadius:4,
        // width:widthPercentageToDP(15),
        height:heightPercentageToDP(5),
        paddingLeft:10,paddingRight:10,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:'row'
    },
    buttonText:{
        fontFamily:"Helvetica",
        fontSize:16
    },
    controllerContainer:{
        flexDirection:"row",
        width:widthPercentageToDP(100),
        alignItems:"center",
        justifyContent:"space-evenly"
    }
})

export default styles;