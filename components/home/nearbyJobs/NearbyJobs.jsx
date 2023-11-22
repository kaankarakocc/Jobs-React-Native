import { Text, View, ActivityIndicator } from 'react-native'
import React, { useCallback } from 'react'
import styles from './NearbyJobs.style'
import useFetch from '../../../api/useFetch'
import NearbyJobsCard from '../../common/cards/NearbyJobs/NearbyJobsCard'
import { useNavigation } from '@react-navigation/native';

export default function NearbyJobs({ activeTab }) {

    const navigation = useNavigation();

    const { data, loading, error } = useFetch('search', {
        query: 'Web developer in Istanbul',
        page: '1',
        num_pages: '1',
        employment_types: String(activeTab).toUpperCase()
    }, activeTab);

    const pressHandler = useCallback((item) => {
        navigation.navigate('JobDetails', { ...item })
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nearby Jobs</Text>
            {
                loading ? <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 70 }} />
                    : error ? <Text>Oops! something went wrong...</Text>
                        : <View style={styles.jobsList}>
                            {data && data.map((job) => (
                                <NearbyJobsCard item={job} key={job.job_id} pressHandler={pressHandler} />
                            ))}
                        </View>
            }
        </View>
    )
}

