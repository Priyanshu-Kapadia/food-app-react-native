import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'

import {FONTS, SIZES, COLORS, icons} from '../constants'
const CartQuantityButton = ({containerStyle, iconStyle, qunatity, onPress}) => {
  return (
    <TouchableOpacity
        style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightOrange2,
            ...containerStyle
        }}
        onPress={onPress}
    >
        <Image 
            source={icons.cart}
            style={{
                width: 20,
                height: 20,
                tintColor: COLORS.black,
                ...iconStyle
            }}
        />

        <View
            style={{
                position:'absolute',
                top: 5,
                right: 5,
                height: 15,
                width: 15,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary
            }}
        >
            <Text
                style={{
                    color: COLORS.white,
                    ...FONTS.body5,
                    lineHeight: 19,
                    fontSize: 10,
                }}
            >
                {qunatity}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default CartQuantityButton