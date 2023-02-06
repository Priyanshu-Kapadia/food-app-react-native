import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'

import { Header, IconButton, LineDivider, TextButton, TextIconButton } from '../../components'

import { FONTS, COLORS, SIZES, icons, dummyData } from '../../constants'

const Settings = ({ navigation }) => {

    useEffect(() => {
        console.log(COLORS.primary)
        if(COLORS.primary != '#FF6C44') {
            {COLORS.primary}
        }
    }, [COLORS.primary])
    

    function ContainerBox({ icon, label, LineColor, onPress }) {
        return (
            <View>
                <TextIconButton
                    icon={icon}
                    iconStyle={{
                        tintColor: COLORS.primary,
                        marginRight: SIZES.radius * 1.5
                    }}
                    label={label}
                    labelStyle={{
                        ...FONTS.body3
                    }}
                    iconPosition='LEFT'
                    containerStyle={{
                        justifyContent: 'flex-start',
                        paddingVertical: SIZES.padding
                    }}
                    onPress={onPress}
                />
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
                title="SETTINGS"
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

    function renderInfo() {
        return (
            <View style={{
                backgroundColor: COLORS.lightGray2,
                borderRadius: SIZES.radius,
                marginTop: SIZES.padding,
                padding: SIZES.padding,
                paddingVertical: 0
            }}>
                <ContainerBox
                    icon={icons.lock}
                    label='Change Password'
                    LineColor={{
                        backgroundColor: COLORS.lightGray1
                    }}
                    onPress={()=>navigation.navigate('ChangePassword')}
                />

                <ContainerBox
                    icon={icons.filter}
                    label='Preferences'
                    LineColor={{
                        backgroundColor: COLORS.lightGray1
                    }}
                    onPress={()=>navigation.navigate('Preferences')}
                />


                <ContainerBox
                    icon={icons.notification}
                    label='Notifications'
                    LineColor={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <ContainerBox
                    icon={icons.dataUse}
                    label='Data use'
                    LineColor={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <ContainerBox
                    icon={icons.globe}
                    label='Language'
                    LineColor={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <ContainerBox
                    icon={icons.checkUpdate}
                    label='Check Update'
                    LineColor={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <ContainerBox
                    icon={icons.call}
                    label='Contact Us'
                    LineColor={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <ContainerBox
                    icon={icons.privacy}
                    label='Privacy Policy'
                    LineColor={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <ContainerBox
                    icon={icons.tc}
                    label='Terms & Conditions'
                    LineColor={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <ContainerBox
                    icon={icons.logout}
                    label='Logout'
                />
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

export default Settings