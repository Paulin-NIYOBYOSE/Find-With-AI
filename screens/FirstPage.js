import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function FirstPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/icon.png')} style={styles.image} />
            <Text style={styles.title}>Lost a document or found it?</Text>
            <Text style={styles.subtitle}>Work with us to get your lost document.</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginPage')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00AEEF',
    },
    image: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 30,
    },
    buttonText: {
        color: '#00AEEF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
