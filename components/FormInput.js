import { View, Text, TextInput } from 'react-native'
import {FONTS, SIZES, COLORS} from '../constants'
import React from 'react'

const FormInput = ({
    containerStyle,
    label,
    value,
    placeholder,
    inputContainerStyle,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoComplete = "off",
    autoCapitalize = "none",
    errorMsg = "",
    maxLength,
    numberOfLines,
    multiline,
    errorStyle
}) => {
  return (
    <View
        style={{
            ...containerStyle,
        }}
    >
      {/* Label & Error msg */}
      <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}
      >
        <Text
            style={{
                color: COLORS.gray,
                ...FONTS.body4
            }}
        >
            {label}
        </Text>
        <Text
            style={{
                color: COLORS.red,
                ...FONTS.body4,
                ...errorStyle
            }}
        >
            {errorMsg}
        </Text>
      </View>

      {/* Text Input */}
      <View
        style={{
            flexDirection: 'row',
            height: 55,
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.base,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            ...inputContainerStyle
        }}
      >
        {prependComponent}
        <TextInput 
            style={{
                flex: 1,
                ...inputStyle
            }}
            value={value}
            numberOfLines={numberOfLines}
            multiline={multiline}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={COLORS.gray}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoComplete={autoComplete}
            autoCapitalize={autoCapitalize}
            onChangeText={(text) => onChange(text)}
        />
        {appendComponent}
      </View>
    </View>
  )
}

export default FormInput