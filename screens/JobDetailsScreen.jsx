import { Text, View, Image, ScrollView, Pressable, Share, Platform } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import styles from './JobDetails.style';
import { icons } from '../constants';
import ActiveTab from '../components/common/jobDetails/ActiveTab';
import { HeaderButton } from '../components';

const tabs = ["Qualifications", "Responsibilities", "Benefits"];

export default function JobDetailsScreen({ route, navigation }) {

    const [activeTab, setActiveTab] = useState("Qualifications");

    const data = route.params;

    const pressHandler = async (pressType) => {
        if (pressType === 'share') {
            try {
                const shareOptions = {
                    message: 'Bu iş ilanı senin için fırsat olabilir.!',
                    url: data.job_apply_link,
                };
                // Android için ekstra seçenekler
                if (Platform.OS === 'android') {
                    shareOptions.title = 'İş İlanı Paylaş';
                    shareOptions.dialogTitle = 'Paylaşmak için bir uygulama seç';
                }
                // iOS için ekstra seçenekler
                if (Platform.OS === 'ios') {
                    shareOptions.excludedActivityTypes = ['com.apple.UIKit.activity.PostToTwitter'];
                    shareOptions.subject = 'İş İlanı Detayları';
                }
                const result = await Share.share(shareOptions);

            } catch (error) {
                console.error(error.message);
            }
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: data.employer_name,
            headerTitleAlign: 'center',
            headerRight: () => (
                <HeaderButton
                    iconUrl={icons.share}
                    dimensions={'60%'}
                    pressType="share"
                    pressHandler={pressHandler}
                />
            )
        });
    }, [navigation, data.employer_name, pressHandler]);

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.infoContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.logoImage}
                            source={{ uri: data.employer_logo ? data.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" }}
                        />
                    </View>
                    <View style={styles.titleRow}>
                        <Text style={styles.title}>
                            {data.job_title}
                        </Text>
                    </View>
                    <ScrollView style={styles.descScroll} contentContainerStyle={styles.descContainer}>
                        <Text style={styles.descTitle}>Description</Text>
                        <Text style={styles.description}>
                            {data.job_description}
                        </Text>
                    </ScrollView>
                    <View style={styles.infoFooterContainer}>
                        <Image
                            source={icons.location}
                            style={styles.icon}
                        />
                        <Text style={styles.locationText}>
                            {data.job_country} - {data.job_city}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.tabsContainer}>
                {tabs.map((item, index) => (
                    <Pressable
                        key={index}
                        style={styles.tabItem(item, activeTab)}
                        onPress={() => setActiveTab(item)}
                    >
                        <ActiveTab item={item} activeTab={activeTab} />
                    </Pressable>
                ))}
            </View>
            <ScrollView>
                {data && data.job_highlights && Object.entries(data.job_highlights).map(([key, value], index) => (
                    <Text key={index}>{`${key}: ${value}`}</Text>
                ))}
            </ScrollView>

        </View>
    );
}


