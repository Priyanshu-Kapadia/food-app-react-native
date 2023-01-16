import React, { useState } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CardQuantityButton, IconLabel, LineDivider, Rating, StepperInput, TextButton } from '../../components';
import Header from '../../components/Header';
import IconButton from '../../components/IconButton';

import { FONTS, SIZES, COLORS, icons, dummyData, images } from '../../constants'

const FoodDetail = ({ route, navigation }) => {
    const { data } = route.params;
    const [foodItem, setFoodItem] = useState(data)

    const [selectedSize, setSelectedSize] = useState('')
    const [qty, setQty] = useState(1);

    function renderDetails() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* Food card */}
                <View
                    style={{
                        height: 190,
                        borderRadius: 15,
                        backgroundColor: COLORS.lightGray2
                    }}
                >
                    {/* Calories and Favoriate */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: SIZES.base,
                            paddingHorizontal: SIZES.radius
                        }}
                    >
                        {/* Calories */}
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <Image
                                source={icons.calories}
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                            <Text
                                style={{
                                    color: COLORS.darkGray2,
                                    ...FONTS.body4
                                }}
                            >
                                {foodItem?.calories} Calories
                            </Text>
                        </View>

                        {/* Favourite */}
                        <Image
                            source={icons.love}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray
                            }}
                        />
                    </View>

                    {/* Food Image */}
                    <Image
                        source={foodItem?.image}
                        resizeMode='contain'
                        style={{
                            height: 170,
                            width: '100%'
                        }}
                    />
                </View>

                {/* Food Info */}
                <View
                    style={{
                        marginTop: SIZES.padding
                    }}
                >
                    {/* Name & Description */}
                    <Text
                        style={{
                            ...FONTS.h1
                        }}
                    >
                        {foodItem?.name}
                    </Text>

                    <Text
                        style={{
                            marginTop: SIZES.base,
                            color: COLORS.darkGray,
                            textAlign: 'justify',
                            ...FONTS.body4
                        }}
                    >
                        {foodItem?.description}
                    </Text>
                </View>

                {/* Ratings, Duarion and Shipping */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding
                    }}
                >
                    {/* Ratings */}
                    <IconLabel
                        containerStyle={{
                            backgroundColor: COLORS.primary
                        }}
                        icon={icons.star}
                        label='4.5'
                        labelStyle={{
                            color: COLORS.white
                        }}
                    />

                    {/* Duration */}
                    <IconLabel
                        containerStyle={{
                            marginLeft: SIZES.radius,
                            paddingHorizontal: 0
                        }}
                        icon={icons.clock}
                        iconStyle={{
                            tintColor: COLORS.black
                        }}
                        label='30 Mins'
                    />

                    {/* Shippin Section */}
                    <IconLabel
                        containerStyle={{
                            marginLeft: SIZES.radius,
                            paddingHorizontal: 0
                        }}
                        icon={icons.dollar}
                        iconStyle={{
                            tintColor: COLORS.black
                        }}
                        label='Free Shipping'
                    />
                </View>

                {/* Sizes */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        alignItems: 'center'
                    }}
                >
                    <Text style={{
                        ...FONTS.h3
                    }}>
                        Sizes :
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginLeft: SIZES.padding
                        }}
                    >
                        {dummyData.sizes.map((item, index) => {
                            return (
                                <TextButton
                                    key={`Sizes-${index}`}
                                    buttonContainerStyle={{
                                        width: 55,
                                        height: 55,
                                        margin: SIZES.base,
                                        borderWidth: 1,
                                        borderRadius: SIZES.radius,
                                        borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                                        backgroundColor: selectedSize == item.id ? COLORS.primary : null
                                    }}
                                    label={item.label}
                                    labelStyle={{
                                        color: selectedSize == item.id ? COLORS.white : COLORS.gray2,
                                        ...FONTS.body2
                                    }}
                                    onPress={() => setSelectedSize(item.id)}
                                />
                            )
                        })}
                    </View>
                </View>
            </View>
        )
    }

    function renderRestaurant() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                {/* Image */}
                <Image
                    source={images.profile}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                />

                {/* Info */}
                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>ByProgramers</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>1.3 KM away from you</Text>
                </View>

                {/* Ratings */}
                <Rating
                    rating={4}
                    iconStyle={{
                        marginLeft: 3
                    }}
                />
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 100,
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}
            >
                {/* StepperInput */}
                <StepperInput
                    value={qty}
                    onAdd={() => setQty(qty + 1)}
                    onMinus={() => {
                        if (qty > 1) {
                            setQty(qty - 1)
                        }
                    }}

                />

                {/* Text Button */}
                <TextButton
                    buttonContainerStyle={{
                        flex: 1,
                        flexDirection: 'row',
                        height: 60,
                        marginLeft: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary,
                    }}
                    label='Buy Now'
                    label2={`$ ${qty * (foodItem?.price)}`}
                    onPress={() => navigation.navigate("MyCart")}
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
            <Header
                title="DETAILS"
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
                    <CardQuantityButton
                        qunatity={qty}
                    />
                }
            />

            {/* Body */}
            <ScrollView>

                {/* Food Detail */}
                {renderDetails()}

                {/* LineDivider */}
                <LineDivider />

                {/* Restaurant */}
                {renderRestaurant()}

                {/* LineDivider */}
                <LineDivider />

            </ScrollView>

            {/* Footer */}

            {renderFooter()}
        </View>
    )
}

export default FoodDetail;