import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    BackHandler
} from 'react-native';

import AuthLayout from '../Authentication/AuthLayout'

import { FONTS, SIZES, COLORS, icons } from '../../constants'

import { CustomSwitch, FormInput, TextButton, TextIconButton } from '../../components';

import { utils } from '../../utils'

const SignIn = ({ navigation }) => {

    // Do Not Go Back For Android Devices
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
        return () => backHandler.remove();
    }, [])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [saveMe, setSaveMe] = useState(false);

    function isEnableSignIN() {
        return email != "" && password != "" && emailError == ""
    }

    return (
        <AuthLayout
            title="Let's Sign You In"
            subtitle="Welcome back,s you've been missed"
        >
            <ScrollView
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    {/* Form Input Section */}
                    <FormInput
                        label="Email"
                        keyboardType='email-address'
                        autoComplete='email'
                        onChange={(value) => {
                            //validate email
                            utils.validateEmail(value, setEmailError)
                            setEmail(value)
                        }}
                        errorMsg={emailError}
                        appendComponent={
                            <View
                                style={{
                                    justifyContent: 'center'
                                }}
                            >
                                <Image
                                    source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                                    }}
                                />
                            </View>
                        }
                    />

                    <FormInput
                        label="Password"
                        secureTextEntry={!showPass}
                        autoComplete='password'
                        containerStyle={{
                            marginTop: SIZES.radius
                        }}
                        onChange={(value) => {
                            setPassword(value)
                        }}
                        appendComponent={
                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    alignItems: 'flex-end',
                                    justifyContent: 'center'
                                }}
                                onPress={() => setShowPass(!showPass)}
                            >
                                <Image
                                    source={showPass ? icons.eye_close : icons.eye}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: COLORS.gray
                                    }}
                                />
                            </TouchableOpacity>
                        }
                    />

                    {/* Save me & Forgot Password */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding,
                            justifyContent: 'space-between'
                        }}
                    >
                        <CustomSwitch
                            value={saveMe}
                            onChange={(value => setSaveMe(value))}
                        />

                        <TextButton
                            label="Forgot Password?"
                            buttonContainerStyle={{
                                backgroundColor: null
                            }}
                            labelStyle={{
                                color: COLORS.gray,
                                ...FONTS.body4
                            }}
                            onPress={() => navigation.navigate("ForgotPassword")}
                        />
                    </View>

                    {/* Sign In */}
                    <TextButton
                        label="Sign In"
                        disabled={isEnableSignIN() ? false : true}
                        buttonContainerStyle={{
                            height: 55,
                            alignItems: 'center',
                            marginTop: SIZES.padding,
                            borderRadius: SIZES.radius,
                            backgroundColor: isEnableSignIN() ? COLORS.primary : COLORS.transparentPrimray
                        }}
                        onPress={()=>navigation.navigate("Home")}
                    />

                    {/* Sign Up */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: SIZES.radius
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.darkGray,
                                ...FONTS.body3
                            }}
                        >
                            Don't have an account?
                        </Text>
                        <TextButton
                            label="Sign Up"
                            buttonContainerStyle={{
                                marginLeft: 3,
                                backgroundColor: null
                            }}
                            labelStyle={{
                                color: COLORS.primary,
                                ...FONTS.h3
                            }}
                            onPress={() => navigation.navigate('SignUp')}
                        />
                    </View>

                </View>
                {/* Footer */}
                <View
                    style={{
                        marginTop: SIZES.padding * 2
                    }}
                >
                    {/* FaceBook */}
                    <TextIconButton
                        containerStyle={{
                            height: 50,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.blue
                        }}
                        icon={icons.fb}
                        iconPosition="LEFT"
                        iconStyle={{
                            tintColor: COLORS.white
                        }}
                        label="Continue With Facebook"
                        labelStyle={{
                            marginLeft: SIZES.radius,
                            color: COLORS.white
                        }}
                        onPress={() => console.log("FB")}
                    />

                    {/* Google */}
                    <TextIconButton
                        containerStyle={{
                            height: 50,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            marginTop: SIZES.radius,
                            backgroundColor: COLORS.lightGray2
                        }}
                        icon={icons.google}
                        iconPosition="LEFT"
                        iconStyle={{
                            tintColor: null
                        }}
                        label="Continue With Google"
                        labelStyle={{
                            marginLeft: SIZES.radius,
                        }}
                        onPress={() => console.log("Google")}
                    />

                </View>
            </ScrollView>
        </AuthLayout>
    )
}

export default SignIn;