import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    BackHandler
} from 'react-native';

import { Header, LineDivider, TextButton, TextIconButton } from '../../components'

import { FONTS, COLORS, SIZES, icons, constants } from '../../constants'

const DeliveryStatus = ({ navigation }) => {

    // Do Not Go Back For Android Devices
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
        return () => backHandler.remove();
    }, [])

    const [currentStep, setCurrentStep] = useState(2)

    function renderHeader() {
        return (
            <Header
                title='DELIVERY STATUS'
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    <View
                        style={{
                            width: 40
                        }}
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
            <View
                style={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.gray,
                        ...FONTS.body4
                    }}
                >
                    Estimated Delivery
                </Text>
                <Text
                    style={{
                        textAlign: 'center',
                        ...FONTS.h2
                    }}
                >
                    21 Jan, 2023 / 12:30PM
                </Text>
            </View>
        )
    }

    function renderTrackOrder() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    paddingVertical: SIZES.padding,
                    borderRadius: SIZES.radius,
                    borderWidth: 2,
                    borderColor: COLORS.lightGray2,
                    backgroundColor: COLORS.white2
                }}
            >
                {/* Track Order */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.h3
                        }}
                    >
                        Track Order
                    </Text>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body3
                        }}
                    >
                        NY012345
                    </Text>
                </View>

                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray2
                    }}
                />

                {/* Status */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    {constants.track_order_status.map((item, index) => {
                        return (
                            <View
                                key={`StatusList-${index}`}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginVertical: -5
                                    }}
                                >
                                    <Image
                                        source={icons.check_circle}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            tintColor: index <= currentStep ? COLORS.primary : COLORS.lightGray1
                                        }}
                                    />

                                    <View
                                        style={{
                                            marginLeft: SIZES.radius
                                        }}
                                    >
                                        <Text
                                            style={{
                                                ...FONTS.h3
                                            }}
                                        >
                                            {item.title}
                                        </Text>

                                        <Text
                                            style={{
                                                color: COLORS.gray,
                                                ...FONTS.body4
                                            }}
                                        >
                                            {item.sub_title}
                                        </Text>
                                    </View>
                                </View>

                                {index < constants.track_order_status.length - 1 &&
                                    <View>
                                        {index < currentStep &&
                                            <View
                                                style={{
                                                    height: 50,
                                                    width: 3,
                                                    marginLeft: 18,
                                                    backgroundColor: COLORS.primary,
                                                    zIndex: -1
                                                }}
                                            />
                                        }

                                        {index >= currentStep &&
                                            <Image
                                                source={icons.dotted_line}
                                                resizeMode='cover'
                                                style={{
                                                    width: 4,
                                                    height: 50,
                                                    marginLeft: 17
                                                }}
                                            />
                                        }
                                    </View>
                                }
                            </View>
                        )
                    })}
                </View>

            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding
                }}
            >
                {currentStep < constants.track_order_status.length - 1 &&
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 55
                        }}
                    >
                        {/* Cancel */}
                        <TextButton
                            label='Cancel'
                            buttonContainerStyle={{
                                width: '40%',
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.lightGray2
                            }}
                            labelStyle={{
                                color: COLORS.primary
                            }}
                            onPress={() => navigation.navigate("Home")}
                        />

                        {/* MapView */}
                        <TextIconButton
                            containerStyle={{
                                flex: 1,
                                marginLeft: SIZES.radius,
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.primary
                            }}
                            label='Map View'
                            labelStyle={{
                                color: COLORS.white,
                                ...FONTS.h3
                            }}
                            icon={icons.map}
                            iconPosition='LEFT'
                            iconStyle={{
                                width: 25,
                                height: 25,
                                marginRight: SIZES.base,
                                tintColor: COLORS.white
                            }}
                            onPress={()=> navigation.navigate('Map')}
                        />

                    </View>
                }

                {currentStep == constants.track_order_status.length - 1 && 
                    <TextButton 
                        buttonContainerStyle={{
                            height: 55,
                            borderRadius: SIZES.base
                        }}
                        label='DONE'
                        onPress={() => navigation.navigate('Home')}
                    />
                }
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
            {renderInfo()}

            {/* Track Order */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {renderTrackOrder()}
            </ScrollView>

            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

export default DeliveryStatus;