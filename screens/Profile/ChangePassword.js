import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { Header, TextButton, IconButton, FormInput } from '../../components'

import { FONTS, COLORS, SIZES, icons, dummyData } from '../../constants'

import { utils } from '../../utils';

const ChangePassword = ({ navigation }) => {

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPass, setShowPass] = useState(false);

    const [newPassword, setNewPassword] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');
    const [showNewPass, setShowNewPass] = useState(false);

    const [reNewPassword, setReNewPassword] = useState('');
    const [reNewPasswordError, setReNewPasswordError] = useState('');
    const [showReNewPass, setShowReNewPass] = useState(false);

    function isEnablePassword() {
        return password != "" && passwordError == "" && newPassword != "" && newPasswordError == "" && reNewPassword != "" && reNewPasswordError == ""
    }

    function renderHeader() {
        return (
            <Header
                title='Change Password'
                containerStyle={{
                    height: 50,
                    marginTop: 40,
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <View
                        style={{
                            width: 40
                        }}
                    />
                }
            />
        )
    }

    function renderForm() {
        return (
            <View style={{
                backgroundColor: COLORS.lightGray2,
                padding: SIZES.radius * 2,
                borderRadius: SIZES.radius,
                marginTop: SIZES.padding
            }}>

                {/* Form Input Section */}
                <FormInput
                    label="Current Password"
                    secureTextEntry={!showPass}
                    autoComplete='password'
                    inputContainerStyle={{
                        backgroundColor: COLORS.white
                    }}
                    errorStyle={{
                      ...FONTS.body5,
                      marginLeft: SIZES.base
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

                <FormInput
                    label="New Password"
                    secureTextEntry={!showNewPass}
                    autoComplete='password'
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        backgroundColor: COLORS.white
                    }}
                    errorStyle={{
                        ...FONTS.body5,
                        marginLeft: SIZES.base
                      }}
                    onChange={(value) => {
                        utils.validatePassword(value, setNewPasswordError)
                        setNewPassword(value)
                    }}
                    errorMsg={newPasswordError}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                            onPress={() => setShowNewPass(!showNewPass)}
                        >
                            <Image
                                source={showNewPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

                <FormInput
                    label="Retype Password"
                    secureTextEntry={!showReNewPass}
                    autoComplete='password'
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        backgroundColor: COLORS.white
                    }}
                    errorStyle={{
                        ...FONTS.body5,
                        marginLeft: SIZES.base
                      }}
                    onChange={(value) => {
                        utils.validatePassword(value, setReNewPasswordError)
                        setReNewPassword(value)
                    }}
                    errorMsg={reNewPasswordError}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                            onPress={() => setShowReNewPass(!showReNewPass)}
                        >
                            <Image
                                source={showReNewPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />


            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                paddingHorizontal: SIZES.padding
            }}
        >
            {/* Header */}
            {renderHeader()}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {renderForm()}
            </ScrollView>

            {/* Change Password */}
            <TextButton
                label="Change Password"
                disabled={isEnablePassword() ? false : true}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginVertical: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: isEnablePassword() ? COLORS.primary : COLORS.transparentPrimray
                }}
                onPress={() => navigation.goBack()}
            />

        </View>
    )
}

export default ChangePassword