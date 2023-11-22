import { Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './PopularJobs.style'

export default function PopularJobsCard({ item, pressHandler }) {

    return (
        <Pressable
            style={({ pressed }) => pressed ? [styles.container, styles.pressed] : [styles.container]}
            onPress={() => pressHandler(item)}
        >
            <Image
                style={styles.logo}
                source={{
                    uri: item.employer_logo
                        ? item.employer_logo
                        : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                }}
                resizeMode='contain'
            />
            <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.title}>
                    {item.employer_name}
                </Text>
                <Text numberOfLines={1} style={styles.desc}>
                    {item.job_title}
                </Text>
            </View>
        </Pressable>
    )
}
