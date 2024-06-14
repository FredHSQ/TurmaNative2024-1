import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingTop: 60,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    image: {
        tintColor: "#f00",
        width: 50,
        height: 50
    },
    input: {
        backgroundColor:'#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: "row"
    },
	textSkill: {
        marginLeft: 5,
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    }
});