import { View, Text, Image } from 'react-native'
import React from 'react'

import { Header, IconButton, IconLabel, TextButton, TextIconButton } from '../../components'

import { FONTS, SIZES, COLORS, icons, images, dummyData } from '../../constants'

const Profile = ({ navigation }) => {

    function renderHeader() {
        return (
            <Header
                title='Profile'
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
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

    function renderProfile() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                }}
            >
                {/* Profile Details */}
                <View
                    style={{
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={images.profile}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: SIZES.radius
                            }}
                        />
                        <Text
                            style={{
                                marginVertical: SIZES.radius * 1.5,
                                marginBottom: SIZES.base,
                                ...FONTS.h2
                            }}
                        >
                            {dummyData?.myProfile.name}
                        </Text>
                        <IconLabel
                            icon={icons.check_circle}
                            iconStyle={{
                                tintColor: COLORS.green
                            }}
                            label="Verfied User"
                            labelStyle={{
                                color: COLORS.green
                            }}
                        />
                    </View>
                    <View>
                        {/* Email Address */}
                        <IconLabel
                            icon={icons.wallet}
                            iconStyle={{
                                tintColor: COLORS.black
                            }}
                            label="Email Address"
                            labelStyle={{
                                color: COLORS.black
                            }}
                            containerStyle={{
                                marginTop: SIZES.radius,
                                marginHorizontal: -10
                            }}
                        />
                        <View
                            style={{
                                padding: SIZES.padding,
                                backgroundColor: COLORS.lightGray2,
                                marginTop: SIZES.base,
                                borderRadius: SIZES.radius
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.h4
                                }}
                            >
                                priyanshu.kapadia@gmail.com
                            </Text>
                        </View>

                        {/* User Address */}
                        <IconLabel
                            icon={icons.focus}
                            iconStyle={{
                                tintColor: COLORS.black
                            }}
                            label="Address"
                            labelStyle={{
                                color: COLORS.black
                            }}
                            containerStyle={{
                                marginTop: SIZES.radius,
                                marginHorizontal: -10
                            }}
                        />
                        <View
                            style={{
                                padding: SIZES.padding,
                                backgroundColor: COLORS.lightGray2,
                                marginTop: SIZES.base,
                                borderRadius: SIZES.radius
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.h4
                                }}
                            >
                                {dummyData?.myProfile.address}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 1.5,
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        height: 55
                    }}
                >
                    {/* Cancel */}
                    <TextButton
                        label='My Wallet'
                        buttonContainerStyle={{
                            width: '40%',
                            borderRadius: SIZES.base,
                            backgroundColor: COLORS.lightGray2
                        }}
                        labelStyle={{
                            color: COLORS.primary
                        }}
                        onPress={() => navigation.navigate("MyWallet")}
                    />

                    {/* MapView */}
                    <TextIconButton
                        containerStyle={{
                            flex: 1,
                            marginLeft: SIZES.radius,
                            borderRadius: SIZES.base,
                            backgroundColor: COLORS.primary
                        }}
                        label='Edit Account'
                        labelStyle={{
                            color: COLORS.white,
                            ...FONTS.h3
                        }}
                        icon={icons.profile}
                        iconPosition='LEFT'
                        iconStyle={{
                            width: 25,
                            height: 25,
                            marginRight: SIZES.base,
                            tintColor: COLORS.white
                        }}
                        onPress={() => navigation.navigate('EditAccount')}
                    />

                </View>

                {/* LogOut */}
                <TextButton
                    buttonContainerStyle={{
                        height: 60,
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    label="LogOut"
                    onPress={()=> navigation.navigate('SignIn')}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Body */}
            {renderProfile()}

            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

export default Profile