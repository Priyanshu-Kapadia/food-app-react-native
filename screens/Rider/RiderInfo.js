import { View, Text, Image } from 'react-native'
import React from 'react'

import { Header, IconButton, IconLabel, Rating, TextButton, TextIconButton } from '../../components'

import { FONTS, SIZES, COLORS, icons, images, dummyData } from '../../constants'

const RiderInfo = ({ navigation }) => {

    function renderHeader() {
        return (
            <Header
                title='RIDER INFO'
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
                                borderRadius: SIZES.radius * 2
                            }}
                        />
                        <Text
                            style={{
                                marginVertical: SIZES.radius * 1.5,
                                marginBottom: SIZES.base,
                                ...FONTS.h2
                            }}
                        >
                            {dummyData?.myRider.name}
                        </Text>
                        <Text
                            style={{
                                marginBottom: SIZES.base,
                                ...FONTS.body3
                            }}
                        >
                            Delivery Man
                        </Text>
                        <IconLabel
                            icon={icons.check_circle}
                            iconStyle={{
                                tintColor: COLORS.green
                            }}
                            label="Verfied Delivery Man"
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
                            icon={icons.call}
                            iconStyle={{
                                tintColor: COLORS.black
                            }}
                            label="Contact No."
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
                                {dummyData?.myRider.contact}
                            </Text>
                        </View>

                        {/* Rating */}
                        <IconLabel
                            icon={icons.star}
                            iconStyle={{
                                tintColor: COLORS.black
                            }}
                            label="Ratings"
                            labelStyle={{
                                color: COLORS.black
                            }}
                            containerStyle={{
                                marginTop: SIZES.radius,
                                marginHorizontal: -10
                            }}
                        />
                        <Rating 
                            rating={dummyData?.myRider.rating}
                            iconStyle={{
                                marginLeft: 3,
                                height: 25,
                                width: 25
                            }}
                        />
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
                {/* LogOut */}
                <TextButton
                    buttonContainerStyle={{
                        height: 60,
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    label="Call"
                    onPress={()=> console.log('Call')}
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

export default RiderInfo