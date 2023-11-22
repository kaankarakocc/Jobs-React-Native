import { Pressable, Image } from 'react-native'
import React from 'react'

import styles from './HeaderButton.style'

export default function HeaderButton({ iconUrl, dimensions, pressHandler, pressType }) {
    return (
        <Pressable
            style={({ pressed }) => pressed ? [styles.btnContainer, styles.pressed] : [styles.btnContainer]}
            onPress={() => pressHandler(pressType)}
        >
            <Image
                source={iconUrl}
                resizeMode='contain'
                style={styles.btn(dimensions)}
            />
        </Pressable>
    )
}
