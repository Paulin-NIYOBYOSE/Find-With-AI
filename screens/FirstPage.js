import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { tailwind } from 'tailwindcss-react-native';

export default function FirstPage({ navigation }) {
    return (
        <View style={tailwind('flex-1 bg-blue-500 justify-center items-center')}>
            {/* Illustration Image */}
            <View style={tailwind('mb-12')}>
                <Image
                    source={require('../assets/search.png')} // replace with your actual image path
                    style={tailwind('h-48 w-48')}
                    resizeMode="contain"
                />
            </View>

            {/* Text Section */}
            <View style={tailwind('mb-16 px-8')}>
                <Text style={tailwind('text-white text-2xl font-bold text-center mb-4')}>
                    Lost a document or found it
                    work with us
                </Text>
                <Text style={tailwind('text-white text-base text-center')}>
                    Find with AI is there for you to enable you
                    to get your lost document
                </Text>
            </View>

            {/* Button */}
            <TouchableOpacity
                style={tailwind('bg-white py-4 px-8 rounded-full')}
                onPress={() => navigation.navigate('LoginPage')} // Change navigation as needed
            >
                <Text style={tailwind('text-blue-500 text-lg font-bold')}>
                    Get started
                </Text>
            </TouchableOpacity>
        </View>
    );
}
