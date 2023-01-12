import React from 'react'
import {
    TouchableOpacity,
    Text,
    Image
} from 'react-native'

import { FONTS, COLORS, SIZES } from '../constants'
const TextIconButton = ({ containerStyle, label, labelStyle, icon, iconPosition = "RIGHT", iconStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                ...containerStyle
            }}
            onPress={onPress}
        >
            {iconPosition == "LEFT" &&
                <Image
                    source={icon}
                    style={{
                        marginRight: 5,
                        height: 20,
                        width: 20,
                        tintColor: COLORS.black,
                        ...iconStyle
                    }}
                />
            }
            <Text
                style={{
                    ...FONTS.h3,
                    ...labelStyle
                }}
            >
                {label}
            </Text>
            {iconPosition == "RIGHT" &&
                <Image
                    source={icon}
                    style={{
                        marginLeft: 7,
                        height: 20,
                        width: 20,
                        tintColor: COLORS.black,
                        ...iconStyle
                    }}
                />
            }
        </TouchableOpacity>
    )
}

export default TextIconButton