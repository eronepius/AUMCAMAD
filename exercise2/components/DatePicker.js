import React,{useState, useEffect} from "react";
import { View, Text, Button, StyleSheet } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { useNavigation } from '@react-navigation/native';


function DatePickerPage(){
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date())
    const [schedule, setSchedule] = useState(false)

    const handleDateChange=(e)=>{
        setDate(e);
        setSchedule(true);
    }

if(schedule === false){
  return (
    <View style={DPstyles.DPView}>
        <DatePicker date={date} onDateChange={e => handleDateChange(e)} />
    </View>
  )
}else{
    return(
    <View style={DPstyles.DPView}>
        <Text style={DPstyles.DPText}>Interniew will be scheduled on {date.getDate()}/{date.getMonth()}/{date.getFullYear()} - {date.getHours()}: 00 : 00 hrs</Text>
        <Button
            key="Mybutton"
            title="Schedule My Interview"
            color="#0074B7"
            onPress={()=> navigation.navigate("SuccessPage")}/>
    </View>
    )
    }
}

const DPstyles = StyleSheet.create({
    DPView:{
        marginTop: 200,
        alignSelf:"center",
        padding: 2,
    },
    DPText:{
        color: '#000000',
        fontWeight:"bold",
        fontSize: 25,
        paddingBottom: 25,
        textAlign:"center"
    }
})

export default DatePickerPage;