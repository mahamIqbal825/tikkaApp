
import * as React from 'react';
// navigations
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//Screens
import signin from "../Screens/Login";
import signUp from "../Screens/Register";
import splash from "../Screens/SplashScreen";
import landing from "../Screens/LandingPage";
import address from "../Screens/DelivaryAddress";

const Stack = createStackNavigator();
function AppNavigation(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="splashScreen" headerMode="none">
            <Stack.Screen name="SignIn" component={signin} />
            <Stack.Screen name="signUp" component={signUp} />
            <Stack.Screen name="splashScreen" component={splash} />
            <Stack.Screen name="landingPage" component={landing} />
            <Stack.Screen name="addressScreen" component={address} />



            </Stack.Navigator>
            </NavigationContainer>
    );
}

export default AppNavigation;