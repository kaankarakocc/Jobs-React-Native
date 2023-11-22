import { Text, View, Pressable, FlatList, ActivityIndicator } from 'react-native'
import React, { useCallback } from 'react'
import styles from './PopularJobs.style'
import useFetch from '../../../api/useFetch'
import PopularJobsCard from '../../common/cards/PopularJobs/PopularJobsCard';
import { useNavigation } from '@react-navigation/native';

export default function PopularJobs({ activeTab }) {

    const navigation = useNavigation();

    const { data, loading, error } = useFetch('search', {
        query: `Web developer in Istanbul`,
        page: '1',
        num_pages: '1',
        employment_types: String(activeTab).toUpperCase()
    }, activeTab);

    const pressHandler = useCallback((item) => {
        navigation.navigate('JobDetails', { ...item })
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular jobs</Text>
                <Pressable>
                    <Text style={styles.headerBtn}>Show all</Text>
                </Pressable>
            </View>

            {
                loading ? <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 70 }} />
                    :
                    error ? <Text>Oops! something went wrong...</Text>
                        : <FlatList
                            data={data}
                            keyExtractor={(item) => item.job_id}
                            renderItem={({ item }) => (
                                <View
                                    style={styles.jobsContainer}
                                >
                                    <PopularJobsCard item={item} pressHandler={pressHandler} />
                                </View>

                            )
                            }
                            horizontal
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                        />
            }


        </View >
    )
}
