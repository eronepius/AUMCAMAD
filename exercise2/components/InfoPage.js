import React, {useState, useEffect} from "react";
import { Text, TextInput, View, StyleSheet, Button, KeyboardAvoidingView, Platform} from "react-native";
import data from "./data.json"
import { useNavigation } from '@react-navigation/native';

function InfoPage(props){
    const navigation = useNavigation();
    let search = props.search
    let mydata = data[search]
    if(mydata){
    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} key="InfoView" style={InfoPageStyles.InfoPageView}>
            <Text key="R" style={InfoPageStyles.TextViewLabel}>Registed No : </Text>
                <TextInput key={mydata['RegNo']} style={InfoPageStyles.TextView} value={mydata['RegNo']} />
            <Text key="FN" style={InfoPageStyles.TextViewLabel}>First Name :</Text>
                <TextInput key={mydata['Firstname']} style={InfoPageStyles.TextView} value={mydata['FirstName']}/>
            <Text key="LN" style={InfoPageStyles.TextViewLabel}>Last Name :</Text>
                <TextInput key={mydata['Lastname']} style={InfoPageStyles.TextView} value={mydata['LastName']} />
            <Text key="DOB" style={InfoPageStyles.TextViewLabel}>DOB :</Text>
                <TextInput key={mydata['DOB']} style={InfoPageStyles.TextView} value={mydata['DOB']} />
            <Text key="SEM" style={InfoPageStyles.TextViewLabel}>Semester :</Text>
                <TextInput key={mydata['CurrentSem']} style={InfoPageStyles.TextView} value={mydata['CurrentSem']} />
            <Text key="CGPA" style={InfoPageStyles.TextViewLabel}>CGPA :</Text>{
                Object.keys(mydata['SemCGPA']).map((type, i) => {
                    return(
                    <View key={type + "view"}>
                    <Text key={type+"text"} style={InfoPageStyles.TextViewLabel}>{type}</Text>
                        <TextInput key={type} style={InfoPageStyles.TextView} keyboardType="numeric" value={mydata['SemCGPA'][type]} />
                    </View>
                    )
                })
            }
            <View key="ButtonView" style={InfoPageStyles.ButtonView}>
            <Button
                key="Mybutton"
                title="Next Interview Date"
                color="#0074B7"
                onPress={()=> navigation.navigate("Schedule Interview")}/>
            </View>
        </KeyboardAvoidingView>
    )
        }else{
            return(
            <View style={InfoPageStyles.InfoPageView}>
                <Text style={InfoPageStyles.TextViewLabel}>No Data found for the Registed Number...</Text>
            </View>
            );
        }
}

const InfoPageStyles = StyleSheet.create({
    InfoPageView:{
        paddingTop: 5,
        paddingLeft: 40,
        width: 350
    },
    TextView:{
        fontSize: 25,
        color: "#000000",
        paddingBottom: 0.2,
        borderBottomWidth: 2,
        fontSize: 20
    },
    TextViewLabel:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#0074B7"
    },
    ButtonView:{
        marginTop: 10,
        width: 200,
        alignSelf:"center"
    }
})

export default InfoPage;