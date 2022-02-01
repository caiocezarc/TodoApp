import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#20295F',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 5,
        borderTopColor: '#EE6B26'
    },
    button: {
        position: 'relative',
        bottom: 48
    },
    image: {
        width: 75,
        height: 75
    }, 
    text: {
        position: 'relative',
        bottom: 30,
        color: '#FFF',
        fontSize: 16
    }
})

export default styles;