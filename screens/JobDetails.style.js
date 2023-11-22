import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONT, SHADOWS } from '../constants/index';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    infoContainer: {
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.gray2,
        paddingBottom: 20,
        alignItems: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: -50,
    },
    logoImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.gray2,
    },
    titleRow: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        paddingVertical: 5,
        borderColor: COLORS.gray2,
        marginVertical: 5,
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        color: COLORS.primary
    },
    descScroll: {
        maxHeight: 250,
    },
    descContainer: {
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    description: {
        fontFamily: FONT.italic,
        fontSize: SIZES.medium,
        color: COLORS.secondary
    },
    descTitle: {
        textAlign: 'center',
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        marginBottom: 10,
        color: COLORS.tertiary
    },
    infoFooterContainer: {
        marginTop: 10,
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon: {
        width: 22,
        height: 22,
    },
    locationText: {
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        color: COLORS.secondary
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 5,
    },
    tabItem: (item, activeTab) => ({
        padding: 8,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: SIZES.small,
        borderColor: activeTab === item ? COLORS.primary : COLORS.gray2,
    }),
    
});

export default styles;