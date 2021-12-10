import { Platform, StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"center",
        
        
    },
    listContainer:{
        height:heightPercentageToDP(70),
        width:widthPercentageToDP(100)
    },
    loader:{
        width:widthPercentageToDP(10),
    },
    loaderContainer:{
        flexDirection:"row",
        height:heightPercentageToDP(73),
        alignItems:"center",
        justifyContent:"center"
    },
    searchContainer:{
        height:Platform.OS == "android" ?  heightPercentageToDP(9): heightPercentageToDP(5),
        width:widthPercentageToDP(100),
    },
    exportContainer:{
        height:heightPercentageToDP(7),
        width:widthPercentageToDP(100),
        alignItems:"center",
        justifyContent:"center"
    }
})

export default styles;