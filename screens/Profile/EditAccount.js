import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { Header, TextButton, IconButton, FormInput } from '../../components'

import { FONTS, COLORS, SIZES, icons, dummyData } from '../../constants'

import DateTimePicker from '@react-native-community/datetimepicker';

const EditAccount = ({ navigation }) => {

  const [name, setName] = useState('');

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    if (Platform.OS === 'ios') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  function renderHeader() {
    return (
      <Header
        title='EDIT ACCOUNT'
        containerStyle={{
          height: 50,
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
          label="Full Name"
          inputContainerStyle={{
            backgroundColor: COLORS.white,
          }}
          placeholder={dummyData.myProfile.name}
          onChange={(value) => {
            setName(value)
          }}
        />

        <FormInput
          label="Phone Number"
          containerStyle={{
            marginTop: SIZES.radius * 1.5
          }}
          inputContainerStyle={{
            backgroundColor: COLORS.white,
          }}
          placeholder={dummyData.myProfile.phone_number}
          onChange={(value) => {
            setName(value)
          }}
        />

        <FormInput
          label="Date of Birth"
          containerStyle={{
            marginTop: SIZES.radius * 1.5
          }}
          inputContainerStyle={{
            backgroundColor: COLORS.white,
          }}
          value={date.toLocaleDateString('en-GB')}
          placeholder={dummyData.myProfile.dob}
          onChange={(value) => {
            setName(value)
          }}
          appendComponent={
            <TouchableOpacity
              style={{
                justifyContent: 'center'
              }}
              onPress={() => {
                showDatepicker()
              }}
            >
              <Image
                source={icons.date}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray
                }}
              />
            </TouchableOpacity>
          }
        />

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}

        <FormInput
          label="Gender"
          containerStyle={{
            marginTop: SIZES.radius * 1.5
          }}
          inputContainerStyle={{
            backgroundColor: COLORS.white,
          }}
          placeholder={dummyData.myProfile.gender}
          onChange={(value) => {
            setName(value)
          }}
        />

        <FormInput
          label="Email"
          containerStyle={{
            marginTop: SIZES.radius * 1.5
          }}
          inputContainerStyle={{
            backgroundColor: COLORS.white,
          }}
          placeholder={dummyData.myProfile.email}
          onChange={(value) => {
            setName(value)
          }}
        />

        <FormInput
          label="Address"
          containerStyle={{
            marginTop: SIZES.radius * 1.5
          }}
          inputContainerStyle={{
            backgroundColor: COLORS.white,
            height: 180,
          }}
          inputStyle={{
            minHeight: 180,
            marginTop: SIZES.radius,
            textAlignVertical: 'top'
          }}
          placeholder={dummyData.myProfile.address}
          onChange={(value) => {
            setName(value)
          }}
          multiline={true}
          numberOfLines={5}
        />

        {/* Sign In */}
        <TextButton
          label="Save"
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary
          }}
          onPress={() => navigation.goBack()}
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
    </View>
  )
}

export default EditAccount