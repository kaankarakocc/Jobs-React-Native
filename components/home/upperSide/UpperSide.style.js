import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONT, SHADOWS } from '../../../constants';

const styles = StyleSheet.create({
    Title: {
        fontFamily: FONT.regular,
        fontSize: SIZES.xxLarge,
        color: COLORS.secondary
    },
    headerContainer: {
        width: '100%'
    },
    subTitle: {
        fontFamily: FONT.italic,
        fontSize: SIZES.large,
        marginTop: 2,
        color: COLORS.primary
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    search: {
        paddingHorizontal: SIZES.medium,
        paddingVertical: SIZES.small,
        flex: 4,
        borderRadius: SIZES.small,
        backgroundColor: COLORS.tertiary,
        color: COLORS.lightWhite,
        fontSize: SIZES.large / 1.25,
        textDecorationLine: 'none',
        fontFamily: FONT.medium,
        ...SHADOWS.medium
    },
    searchIconContainer: {
        width: '15%',
        height: '75%',
    },
    searchIcon: (dimension) => ({
        flex: 1,
        width: dimension,
        height: dimension,
    }),
    pressed: {
        opacity: 0.7
    },
    tabsContainer: {
        width: '100%',
    },
    tab: (activeTab, item) => ({
        paddingVertical: SIZES.medium / 1.5,
        paddingHorizontal: SIZES.large / 1,
        borderRadius: SIZES.small,
        marginRight: 15,
        borderWidth: 1,
        borderColor: activeTab === item ? COLORS.primary : COLORS.gray2
    }),
    tabText: (activeTab, item) => ({
        fontSize: SIZES.medium,
        color: activeTab === item ? COLORS.primary : COLORS.gray2,
        fontFamily: FONT.medium,
    })
})


export default styles;
