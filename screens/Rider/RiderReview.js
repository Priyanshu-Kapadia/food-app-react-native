import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { Header, IconButton, IconLabel, Rating, TextButton, TextIconButton } from '../../components'

import { FONTS, SIZES, COLORS, icons, images, dummyData } from '../../constants'

import { TextInput } from 'react-native-gesture-handler';

const RiderReview = ({ navigation }) => {

    const [selectedTip, setSelectedTip] = useState('')
    const [comment, setComment] = useState('')


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
            <ScrollView
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
                            label="Order Delivered"
                            labelStyle={{
                                color: COLORS.green
                            }}
                        />
                        <Text
                            style={{
                                marginTop: SIZES.padding,
                                marginBottom: SIZES.base,
                                ...FONTS.body3
                            }}
                        >
                            Please rate Delivery Service
                        </Text>
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

                {/* Add Tips */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                        marginBottom: SIZES.padding,
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    <IconLabel
                        icon={icons.coupon}
                        iconStyle={{
                            tintColor: COLORS.black
                        }}
                        label="Add Tips"
                        labelStyle={{
                            color: COLORS.black,
                            ...FONTS.h3
                        }}
                        containerStyle={{
                            marginTop: SIZES.radius,
                            marginHorizontal: -10
                        }}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}
                    >
                        {dummyData?.myRider.tips.map((item, index) => {
                            return (
                                <TextButton
                                    key={`Sizes-${index}`}
                                    buttonContainerStyle={{
                                        width: 'auto',
                                        height: 55,
                                        marginRight: SIZES.base * 1.9,
                                        paddingHorizontal: SIZES.radius,
                                        borderWidth: 1,
                                        borderRadius: SIZES.radius,
                                        borderColor: selectedTip == item.id ? COLORS.primary : COLORS.gray2,
                                        backgroundColor: selectedTip == item.id ? COLORS.primary : null
                                    }}
                                    label={item.label}
                                    labelStyle={{
                                        color: selectedTip == item.id ? COLORS.white : COLORS.gray2,
                                        ...FONTS.body3
                                    }}
                                    onPress={() => setSelectedTip(item.id)}
                                />
                            )
                        })}
                    </View>
                </View>

                {/* Comment */}
                <View
                    style={{
                        marginTop: SIZES.base / 4,
                        marginBottom: SIZES.padding / 2,
                        paddingHorizontal: SIZES.padding,
                    }}
                >
                    <View
                        style={{
                            paddingHorizontal: SIZES.padding,
                            backgroundColor: COLORS.lightGray2,
                            borderRadius: SIZES.radius,
                            height: 180,
                        }}
                    >
                        <TextInput
                            multiline={true}
                            textStyle={{ minHeight: 180 }}
                            placeholder="Add Comment ..."
                            numberOfLines={5}
                        />
                    </View>

                </View>
            </ScrollView>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* Submit */}
                <TextButton
                    buttonContainerStyle={{
                        height: 60,
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    label="Submit Review"
                    onPress={() => navigation.navigate('Home')}
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

export default RiderReview