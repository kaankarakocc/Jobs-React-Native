import { Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import styles from './NearbyJobs.style'
import { icons } from '../../../../constants'

export default function NearbyJobsCard({ item, pressHandler }) {
    return (
        <Pressable
            style={({ pressed }) => pressed ? [styles.container, styles.pressed] : [styles.container]}
            onPress={() => pressHandler(item)}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.employer_logo ? item.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                    }}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.textContainer}>
                <Text numberOfLines={2} style={styles.jobTitle}>{item.job_title}</Text>
            </View>
            <View style={styles.locationContainer}>
                <Image
                    source={icons.location}
                    style={styles.icon}
                />
                <Text style={styles.locaitonText}>{item.job_city}</Text>
            </View>
        </Pressable>
    )
}
