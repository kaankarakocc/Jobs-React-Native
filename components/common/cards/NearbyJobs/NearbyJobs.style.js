import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONT, SHADOWS } from '../../../../constants';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        marginVertical: 5,
        borderColor: COLORS.gray,
        borderRadius: SIZES.small,
        width: '100%',
        
    },
    imageContainer: {
        height: 70,
        width: 70,
        padding: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        flex: 2.5,
        marginLeft: 20,
    },
    jobTitle: {
        fontFamily: FONT.medium,
        fontSize: SIZES.large / 1.10,
        textAlign: 'center',
        color: COLORS.secondary
    },
    locationContainer: {
        flex: 1.2,
        flexDirection: 'row',
        marginLeft: 10,
    },
    locaitonText: {
        fontFamily: FONT.medium,
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    icon: {
        width: 20,
        height: 20,
    },
    pressed: {
        opacity: 0.7
    }
})

export default styles