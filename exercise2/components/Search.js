import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';


function Search(props){
    const navigation = useNavigation();
    let setSearch = props.search;
    
    const handleOnEditingEnd = (e) =>{
        setSearch(e.nativeEvent.text);
        navigation.navigate("InfoPage");
        
    }

    return(
        <View style={SearchStyles.SearchView}>
            <View>
                <TextInput
                    style={SearchStyles.SearchText}
                    placeholder="Reg No 2021178009"
                    keyboardType="numeric"
                    onEndEditing={(e) => handleOnEditingEnd(e)}
                />
            </View>
            {/* <Button style={SearchStyles.SearchButton}
                title="Search"
                color= "#000000"/> */}
        </View>
    )
}

const SearchStyles = StyleSheet.create({
    SearchView:{
        height: 600,
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"center",
        width: 400
    },
    SearchText:{
        borderBottomWidth: 2,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 20
    },
    SearchButton:{
        marginLeft : 5,
        
    }
});

export default Search;