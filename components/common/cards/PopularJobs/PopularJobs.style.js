import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONT, SHADOWS } from '../../../../constants';


const styles = StyleSheet.create({
    logo: {
        width: 45,
        height: 45,
        borderRadius: SIZES.small
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 5,
        backgroundColor: COLORS.lightWhite
    },
    textContainer: {
        marginTop: 10,
        width: '100%',
    },
    title: {
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        textAlign: 'center',
        marginVertical: 5,
    },
    desc: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large / 1.10,
        textAlign: 'center',
        marginVertical: 2,
    },
    pressed: {
        opacity: 0.7
    }

})

export default styles