import { Text, TextInput, View, Image, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './UpperSide.style'

const jobTypes = ["Fulltime", "Parttime", "Contractor"];

export default function UpperSide({ iconUrl, dimensions, searchTerm, setSearchTerm, setActiveTab, activeTab, presssHandler }) {

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.Title}>
                    Welcome
                </Text>
                <Text style={styles.subTitle}>
                    Find your perfect job
                </Text>
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.search}
                    placeholder='What are you looking for?'
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
                <Pressable
                    style={({ pressed }) => pressed ? [styles.searchIconContainer, styles.pressed] : [styles.searchIconContainer]}
                    onPress={presssHandler}
                >
                    <Image
                        source={iconUrl}
                        resizeMode='contain'
                        style={styles.searchIcon(dimensions)}
                    />
                </Pressable>
            </View>
            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobTypes}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <Pressable
                            style={styles.tab(activeTab, item)}
                            onPress={() => setActiveTab(item)}
                        >
                            <Text style={styles.tabText(activeTab, item)}>{item}</Text>
                        </Pressable>
                    )
                    }
                    horizontal
                />
            </View>
        </View>
    )
}
