import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONT, SHADOWS } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.large,
        flex: 1
    },
    title: {
        height: 35,
        width: '100%',
        fontFamily: FONT.medium,
        fontSize: SIZES.xLarge
    },
    jobsList: {
        width: '100%',
        height: '100%',
        paddingBottom: 50
    },
})

export default styles