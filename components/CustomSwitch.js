import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React from 'react'
import { FONTS, SIZES, COLORS } from '../constants'

const CustomSwitch = ({value, onChange, textStyle}) => {
  return (
    <TouchableWithoutFeedback
        onPress={()=>onChange(!value)}
    >
        <View
            style={{
                flexDirection: 'row'
            }}
        >
            {/* Switch */}
            <View
                style={value ? styles.switchOnContainer : styles.switchOffContainer}
            >
                <View
                    style={value ? styles.dotActive : styles.dotNotActive}
                />
            </View>

            {/* Text */}
            <Text
                style={{
                    color: value ? COLORS.primary : COLORS.gray,
                    marginLeft: SIZES.base,
                    ...FONTS.body4,
                    ...textStyle
                }}
            >
                Save Me
            </Text>
        
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    switchOnContainer: {
        width: 40,
        height: 20,
        paddingRight: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        position:'relative'
    },
    switchOffContainer: {
        width: 40,
        height: 20,
        paddingRight: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 10,
        position: 'relative'
    },
    dotNotActive: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: COLORS.gray,
        position: 'absolute',
        left: 3,
    },
    dotActive: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: COLORS.white,
        position: 'absolute',
        right: 3,
    }
})

export default CustomSwitch