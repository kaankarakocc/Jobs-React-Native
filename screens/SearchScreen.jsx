import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useCallback } from 'react'
import useFetch from '../api/useFetch';
import NearbyJobsCard from '../components/common/cards/NearbyJobs/NearbyJobsCard';
import { COLORS, SIZES, FONT } from '../constants/index';

export default function SearchScreen({ route, navigation }) {

    const { searchTerm } = route.params;

    const { data, loading, error } = useFetch('search', {
        query: `${searchTerm}`,
        page: '1',
        num_pages: '1',
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: 'center',
            title: ''
        })
    }, [navigation])

    const pressHandler = useCallback((item) => {
        navigation.navigate('JobDetails', { ...item })
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Jobs
                </Text>
            </View>
            {
                loading ?
                    <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 70 }} />
                    : error ? <Text>Oops! something went wrong...</Text>
                        : <FlatList
                            data={data}
                            keyExtractor={(item) => item.job_id}
                            renderItem={({ item }) => (
                                <NearbyJobsCard item={item} pressHandler={pressHandler} />
                            )}
                            showsVerticalScrollIndicator={false}
                        />
            }

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        paddingBottom: 50,

    },
    titleContainer: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray2,
        marginVertical: 10,
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        color: COLORS.primary
    }
})