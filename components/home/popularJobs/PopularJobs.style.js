import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONT, SHADOWS } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.large,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontFamily: FONT.medium,
        fontSize: SIZES.xLarge
    },
    headerBtn: {
        fontFamily: FONT.regular,
    },
    jobsContainer: {
        marginVertical: 10,
        marginRight: 10,
        width: 250,
        height: 140,
        borderWidth: 1,
        borderRadius: SIZES.small,
        borderColor: COLORS.gray,
    }

});


export default styles 
