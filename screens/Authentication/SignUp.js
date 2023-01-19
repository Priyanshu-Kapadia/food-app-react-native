import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import AuthLayout from '../Authentication/AuthLayout'

import { FONTS, SIZES, COLORS, icons } from '../../constants'

import { FormInput, TextButton, TextIconButton } from '../../components';

import { utils } from '../../utils'

const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPass, setShowPass] = useState(false);
    // const [saveMe, setSaveMe] = useState(false);

    function isEnableSignUp() {
        return email != "" && username != "" && password != "" && emailError == "" && passwordError == ""
    }

    return (
        <AuthLayout
            title="Getting Started"
            subtitle="Create an account to continue!"
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
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
                        label="Username"
                        containerStyle={{
                            marginTop: SIZES.radius
                        }}
                        onChange={(value) => {
                            // utils.validateEmail(value, setEmailError)
                            setUsername(value)
                        }}
                        errorMsg={usernameError}
                        appendComponent={
                            <View
                                style={{
                                    justifyContent: 'center'
                                }}
                            >
                                <Image
                                    source={username == "" || (username != "" && usernameError == "") ? icons.correct : icons.cancel}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: username == "" ? COLORS.gray : (username != "" && usernameError == "") ? COLORS.green : COLORS.red
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
                            utils.validatePassword(value, setPasswordError)
                            setPassword(value)
                        }}
                        errorMsg={passwordError}
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
                        {/* <CustomSwitch
                        value={saveMe}
                        onChange={(value => setSaveMe(value))}
                    /> */}

                        <TextButton
                            label="Forgot Password"
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
                        label="Sign Up"
                        disabled={isEnableSignUp() ? false : true}
                        buttonContainerStyle={{
                            height: 55,
                            alignItems: 'center',
                            marginTop: SIZES.padding,
                            borderRadius: SIZES.radius,
                            backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimray
                        }}
                        onPress={() => navigation.navigate("Otp")}
                    />

                    {/* Sign In */}
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
                            Alreday have an account?
                        </Text>
                        <TextButton
                            label="Sign In"
                            buttonContainerStyle={{
                                marginLeft: 3,
                                backgroundColor: null
                            }}
                            labelStyle={{
                                color: COLORS.primary,
                                ...FONTS.h3
                            }}
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                </View>
                {/* Footer */}
                <View
                    style={{
                        marginTop: SIZES.padding * 2,
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
                {/* </View> */}
            </ScrollView>
        </AuthLayout>
    )
}

export default SignUp;