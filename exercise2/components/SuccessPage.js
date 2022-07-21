import React from "react";
import {View, Text, StyleSheet} from "react-native";

function SuccessPage(){
    return(
        <View style={Success.SuccessView}>
            <Text style={Success.SuccessText}>Interview Scheduled Successfully.</Text>
        </View>
    )
}

const Success = StyleSheet.create({
    SuccessView:{
        alignSelf: "center",
        marginTop: 200
    },
    SuccessText:{
        fontWeight:"bold",
        color: "#0074B7",
        fontSize: 25,
    }
})

export default SuccessPage;