import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    imageIcon: {
        width: 40,
        height: 40,
        marginHorizontal: 10
    },
    label: {
        color: '#707070',
        fontSize: 16,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 4
    },
    input: {
        fontSize: 18,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EE6B26',
        marginHorizontal: 10
    },
    inputArea: {
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: '#EE6B26',
        marginHorizontal: 10,
        borderRadius: 10,
        height: 150,
        textAlignVertical: 'top'
    },

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
    },

    inLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },

    inputInline: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    }, 

    switchLabel: {
        fontWeight: 'bold',
        color: '#EE6B26',
        textTransform: 'uppercase',
        fontSize: 16,
        paddingLeft: 10
    },

    removeLabel: {
        fontWeight: 'bold',
        color: '#20295F',
        textTransform: 'uppercase',
        fontSize: 16,
        paddingLeft: 10
    },
    
    typeIconInative: {
        opacity: 0.5
    }
});


export default styles;