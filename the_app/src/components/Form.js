import React, {useState} from "react";
import {Text, TextInput, View, StyleSheet, Button} from "react-native"
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/FontAwesome';

function Form(){
  let [date, setDate] = useState(new Date())
  console.log(date)
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true
    })
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
    return(
        <View>
            <Text style={styles.titletext}> Placement Registration </Text>
            <TextInput style={styles.inputText} placeholder="Name : eg. Anton Erone Pius" />
            <TextInput style={styles.inputText} placeholder="Branch : eg. IST" />
            <TextInput style={styles.inputText} placeholder="Degree : eg. BE or BTech" />
            <TextInput style={styles.inputText} placeholder="Year Of Joining eg. 2001"/>
        <Button onPress={showDatepicker} title="Show date picker!" style={styles.datePickerStyle} />
        <Button onPress={showTimepicker} title="Show time picker!" />
        <Text><Icon name="rocket" size={30} color="#900"/></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titletext: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center",
    },
    inputText:{
        fontSize: 25,
        borderBottomWidth :2,
        margin: 8,
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    }

})

export default Form;