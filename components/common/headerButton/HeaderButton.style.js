import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    btnContainer: {
        width: 45,
        height: 45,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
    },
    btn: (dimensions) => ({
        width: dimensions,
        height: dimensions,
        borderRadius: SIZES.small / 1.25
    }),
    pressed: {
        opacity: 0.5
    }

})


export default styles;
