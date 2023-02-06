import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { Header, TextButton, IconButton, FormInput } from '../../components'

import { FONTS, COLORS, SIZES, icons, dummyData, theme } from '../../constants'

import { fromHsv, TriangleColorPicker } from 'react-native-color-picker'
import { color } from 'react-native-reanimated'


const Preferences = ({ navigation }) => {

  const [csColor, setCsColor] = useState('');

  function renderHeader() {
    return (
      <Header
        title='Preferences'
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

      <View
        style={{
          marginTop: SIZES.radius
        }}
      >
        <Text
          style={{
            ...FONTS.h3
          }}
        >
          Theme Color :
        </Text>
        <TriangleColorPicker
          onColorChange={color => { setCsColor(fromHsv(color)) }}
          onColorSelected={color => { setCsColor(fromHsv(color)) }}
          style={{ height: 200 }}
        />
      </View>

      {/* Change Password */}
      <TextButton
        label="Apply"
        buttonContainerStyle={{
          height: 55,
          alignItems: 'center',
          marginVertical: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary
        }}
        onPress={() => {
          COLORS.primary = csColor
        }}
      />

      <TextButton
        label="Reset"
        buttonContainerStyle={{
          height: 55,
          alignItems: 'center',
          marginBottom: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary
        }}
        onPress={() => {
          COLORS.primary = '#FF6C44'
        }}
      />

    </View>
  )
}

export default Preferences