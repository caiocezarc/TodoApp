import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#20295F',
        borderBottomWidth: 5,
        borderBottomColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'center'      
    },
    logo: {
        width: 100,
        height: 35
    },
    notification: {
        position: 'absolute',

        right: 20
    },
    notificationImage: {
        width: 30,
        height: 35
    },
    notificationText: {
        color: '#EE6B26',
        fontWeight: 'bold'
    },
    circle: {
        backgroundColor: '#FFF',
        borderRadius: 50,
        width: 23,
        height: 23,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 13,
        bottom: 13
    }, 
    leftIcon: {
        position: 'absolute',
        left: 20
    },
    leftIconImage: {
        width: 35,
        height: 35,
    }
})

export default styles;