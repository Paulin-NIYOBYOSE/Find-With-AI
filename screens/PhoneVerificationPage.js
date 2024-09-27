import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function PhoneVerificationPage() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/icon.png')} style={styles.image} />
            <Text style={styles.title}>Phone Verification</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your phone"
                keyboardType="phone-pad"
                placeholderTextColor="#ccc"
            />
            <TouchableOpacity style={styles.button} onPress={() => alert('Phone verification initiated')}>
                <Text style={styles.buttonText}>Continue</Text>
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
        marginVertical: 20,
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 15,
        color: '#000',
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
