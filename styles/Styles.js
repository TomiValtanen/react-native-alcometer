import { StatusBar, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    whiteColor:"#ffffff",
    statusBarColor:"#ffffff",
    numericInputWidth:160,
    numericInputHeight:45,
    container: {
        paddingTop: StatusBar.currentHeight + 5,
        flex: 1,
        alignItems: "stretch",
        justifyContent: 'center',
        flexDirection: "column",
        padding: 10,
    },
    switchContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    headerContainer: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: 40,
        textShadowColor:"#000000",
        textShadowOffset:{width:1.5,height:1.5},
        textShadowRadius:2,
        textDecorationLine:"underline",
        fontWeight:"300",
        letterSpacing:1
    },
    textInputContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 5

    },
    textInput: {
        width: "50%",
        borderBottomWidth: 1,
        height: 40,
        
    },
    numericInputContainer: {
        flex: 4,
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingLeft: 5
    },
    numericInput: {
        marginTop: 5,
    },
    radioButtonContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 5,
    },
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom:5
    },
    calculateContainer: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
    button: {
        borderWidth:2,
        width: 180,
        height: 60,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 10,
    },
    resultText: {
        fontSize: 35,
        fontWeight: "bold",
        textShadowColor:"#000000",
        textShadowOffset:{width:0.5,height:0.5},
        textShadowRadius:2,
        paddingHorizontal:6
    },
    text:{
        textAlign:"center",
        paddingBottom:5,
        fontSize:16,
        textShadowColor:"#000000",
        textShadowOffset:{width:0.5,height:0.5},
        textShadowRadius:1,
        fontWeight:"200",
        letterSpacing:0.5
    }

});

const darkStyles = StyleSheet.create({
    backgroundColor: "#352F44",
    textColor: "#FAF0E6",
    buttonColor: "#5C5470",
    inputStyleColor: "#d6d0e6",
    thumColor:"#5C5470",
});
const lightStyles = StyleSheet.create({
    backgroundColor: "#ffd5fa",
    textColor: "#6b07c9",
    buttonColor: "#bf9be0",
    inputStyleColor: "#f8ff94",
    thumbColor:"#BC7AF9",
});
const alcometerLevels = StyleSheet.create({
    safeColor:"#4dff00",
    cautionColor:"#eeff00",
    dangerColor:"#f03c3c"
});

export { Styles , darkStyles , lightStyles ,alcometerLevels}