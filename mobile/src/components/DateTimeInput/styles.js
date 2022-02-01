import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    dateTimeContainer: {
        marginVertical: 20,
        marginHorizontal: 10
    },

    dateTimeButton: {
        borderBottomWidth: 1,
        borderBottomColor: '#EE6B26',
        marginVertical: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    dateTimeButtonText: {
        color: "#707070",
        fontSize: 16
    },
    dateTimeButtonImage: {
        height: 25,
        width: 25
    }
})

export default styles;