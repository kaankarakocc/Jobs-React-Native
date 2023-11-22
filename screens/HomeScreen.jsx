import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { UpperSide } from '../components'
import { icons } from '../constants'
import { COLORS } from '../constants'
import PopularJobs from '../components/home/popularJobs/PopularJobs'
import NearbyJobs from '../components/home/nearbyJobs/NearbyJobs'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {

    const navigation = useNavigation();

    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('Fulltime');

    const pressHandler = () => {
        if (searchTerm && searchTerm !== '') {
            navigation.navigate('Search', { searchTerm });
        }
        else {
            Alert.alert('Please enter a search term');
        }
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.rows}>
                <UpperSide
                    iconUrl={icons.search}
                    dimensions={'80%'}
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    presssHandler={pressHandler}
                />
                <PopularJobs activeTab={activeTab} />
                <NearbyJobs activeTab={activeTab} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    rows: {
        marginVertical: 10,
        marginHorizontal: 20,
    }
})