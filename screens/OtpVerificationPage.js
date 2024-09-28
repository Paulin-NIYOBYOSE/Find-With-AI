import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import OTPInputView from 'react-native-otp-inputs';
import { tailwind } from 'tailwindcss-react-native';

export default function OtpVerificationPage() {
    const [otp, setOtp] = useState('');

    return (
        <View style={tailwind('flex-1 bg-blue-500')}>
            {/* Top Image */}
            <View style={tailwind('items-center mt-8')}>
                <Text style={tailwind('text-white text-xl font-bold')}>Enter OTP</Text>
                <Text style={tailwind('text-white mt-2')}>
                    An 4 digit OTP has been sent to {'\n'}
                    <Text style={tailwind('font-bold')}>+8801712345678</Text>
                </Text>
            </View>

            {/* OTP Input */}
            <View style={tailwind('items-center justify-center mt-8')}>
                <OTPInputView
                    style={tailwind('h-12 w-64')}
                    pinCount={4}
                    code={otp}
                    onCodeChanged={setOtp}
                    autoFocusOnLoad
                    codeInputFieldStyle={tailwind(
                        'bg-white border border-gray-300 rounded-lg h-12 w-12 text-lg'
                    )}
                    codeInputHighlightStyle={tailwind('border-blue-400')}
                />
            </View>

            {/* Continue Button */}
            <View style={tailwind('items-center mt-8')}>
                <TouchableOpacity
                    style={tailwind('bg-blue-600 rounded-full px-12 py-4')}
                    onPress={() => console.log('OTP:', otp)}
                >
                    <Text style={tailwind('text-white text-lg')}>Continue</Text>
                </TouchableOpacity>
            </View>

            {/* Resend OTP */}
            <View style={tailwind('mt-4 items-center')}>
                <Text style={tailwind('text-white text-sm')}>
                    Resend OTP <Text style={tailwind('font-bold')}>00:12</Text>
                </Text>
            </View>
        </View>
    );
}
