import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobDetailsScreen from '../screens/JobDetailsScreen';
import { HeaderButton } from '../components';
import { icons, images } from '../constants';
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function Navigation() {

    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Italic': require('../assets/fonts/Roboto-Italic.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerLeft: () => {
                    return <HeaderButton iconUrl={icons.menu} dimensions={'60%'} />
                },
                headerTitle: '',
                headerRight: () => {
                    return <HeaderButton iconUrl={images.profilePic} dimensions={'100%'} />
                },


            }} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
        </Stack.Navigator>
    )
}
