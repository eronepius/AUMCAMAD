import React, {useState, useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Local Import
import Search from "./Search";
import InfoPage from "./InfoPage";
import DatePicker from "./DatePicker";
import SuccessPage from "./SuccessPage"

const Stack = createNativeStackNavigator();

function Organizer(){
    let [search, setSearch] = useState("");

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Interview Registration">
                    {(props) => <Search {...props} search={setSearch} />}
                </Stack.Screen>
                <Stack.Screen name="InfoPage">
                    {(props) => <InfoPage {...props} search={search} />}
                </Stack.Screen>
                <Stack.Screen name="Schedule Interview" component={DatePicker} />
                <Stack.Screen name="SuccessPage" component={SuccessPage} />
            </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Organizer;