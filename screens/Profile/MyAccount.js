import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import { Header, IconButton, LineDivider, TextButton, TextIconButton } from '../../components'

import { FONTS, COLORS, SIZES, icons, dummyData } from '../../constants'

const MyAccount = ({ navigation }) => {

    function ContainerInfo({ label, value, LineColor }) {
        return (
            <View style={{
                marginHorizontal: SIZES.radius * 1.7
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: SIZES.padding,
                }}>
                    <Text style={{
                        ...FONTS.body3,
                        color: COLORS.gray
                    }}>
                        {label}
                    </Text>
                    <Text style={{
                        ...FONTS.body3
                    }}>
                        {value}
                    </Text>
                </View>
                <LineDivider
                    lineStyle={{
                        ...LineColor
                    }}
                />
            </View>
        )
    }

    function renderHeader() {
        return (
            <Header
                title="ACCOUNT INFO"
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
                    <TextButton
                        buttonContainerStyle={{
                            backgroundColor: COLORS.transparent,
                        }}
                        label='Edit'
                        labelStyle={{
                            color: COLORS.primary,
                        }}
                        onPress={() => navigation.navigate('EditAccount')}
                    />
                }
            />
        )
    }

    function renderInfo() {
        return (
            <View>
                <View style={{
                    backgroundColor: COLORS.lightGray2,
                    borderRadius: SIZES.radius,
                    marginTop: SIZES.padding * 1.3
                }}>
                    <ContainerInfo
                        label='Full Name'
                        value={dummyData.myProfile.name}
                        LineColor={{
                            backgroundColor: COLORS.lightGray1
                        }}
                    />
                    <ContainerInfo
                        label='Phone Number'
                        value={dummyData.myProfile.phone_number} LineColor={{
                            backgroundColor: COLORS.lightGray1
                        }}
                    />
                    <ContainerInfo
                        label='User ID'
                        value={dummyData.myProfile.user_id}
                        LineColor={{
                            backgroundColor: COLORS.transparent
                        }}
                    />
                </View>
                <View style={{
                    backgroundColor: COLORS.lightGray2,
                    borderRadius: SIZES.radius,
                    marginTop: SIZES.padding
                }}>
                    <ContainerInfo
                        label='Date of Birth'
                        value={dummyData.myProfile.dob}
                        LineColor={{
                            backgroundColor: COLORS.lightGray1
                        }}
                    />
                    <ContainerInfo
                        label='Gender'
                        value={dummyData.myProfile.phone_number} LineColor={{
                            backgroundColor: COLORS.lightGray1
                        }}
                    />
                    <ContainerInfo
                        label='Joined'
                        value={dummyData.myProfile.user_id}
                        LineColor={{
                            backgroundColor: COLORS.lightGray1
                        }}
                    />
                    <ContainerInfo
                        label='Email'
                        value={dummyData.myProfile.email}
                        LineColor={{
                            backgroundColor: COLORS.lightGray1
                        }}
                    />
                    <ContainerInfo
                        label='Address'
                        value={dummyData.myProfile.address}
                        LineColor={{
                            backgroundColor: COLORS.transparent
                        }}
                    />
                </View>
            </View>

        )
    }

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Info */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {renderInfo()}
            </ScrollView>
        </View>
    )
}

export default MyAccount