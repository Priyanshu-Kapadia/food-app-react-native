import React, { useEffect, useState } from 'react';
import {
    View,
    Text
} from 'react-native';

import OtpInputView from "@twotalltotems/react-native-otp-input"
import { FONTS, SIZES, COLORS } from '../../constants'
import { TextButton } from '../../components';
import { AuthLayout } from "../";

const Otp = ({ navigation }) => {

    const [timer, setTimer] = useState(60)

    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1
                } else {
                    return prevTimer
                }
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])
    return (
        <AuthLayout
            title="OTP Authentication"
            subtitle="An authentication cofr has been sent to byprogrammers@gmail.com"
            titleContainerStyle={{
                marginTop: SIZES.padding
            }}
        >
            {/* OTP Input */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2,
                }}
            >
                <OtpInputView
                    pinCount={4}
                    style={{
                        width: "100%",
                        height: 50
                    }}
                    codeInputFieldStyle={{
                        width: 65,
                        height: 65,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                    onCodeFilled={(code) => console.log(code)}
                />

                {/* Coutdown Timer */}
                {/* Sign In */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: SIZES.padding
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        Didn't receive code?
                    </Text>
                    <TextButton
                        label={timer == 0 ? "Resend" : `Resend(${timer}s)`}
                        disabled={timer == 0 ? false : true}
                        buttonContainerStyle={{
                            marginLeft: SIZES.base,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => setTimer(60)}
                    />
                </View>
            </View>
            {/* Footer */}
            <View>
                <TextButton 
                    label="Continue"
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={()=> console.log('Continue')}
                />

                <View
                    style={{
                        marginTop: SIZES.padding,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        By sigining up, you agree to our,
                    </Text>
                    <TextButton 
                    label="Terms and Conditions"
                    buttonContainerStyle={{
                        backgroundColor: null,
                        marginTop: SIZES.base
                    }}
                    labelStyle={{
                        color: COLORS.primary,
                        ...FONTS.body3
                    }}
                    onPress={()=> console.log('Terms and Condition')}
                    />
                </View>
            </View>
        </AuthLayout>
    )
}

export default Otp;