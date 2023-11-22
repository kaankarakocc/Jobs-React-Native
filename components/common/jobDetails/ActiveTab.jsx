import { Text, View } from 'react-native'
import React from 'react'
import styles from './ActiveTab.style'

export default function ActiveTab({ item, activeTab }) {
    return (
        <View>
            <Text>{item}</Text>
        </View>
    )
}
