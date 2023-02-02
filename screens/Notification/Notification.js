import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

import {
    CustomSwitch,
    Header,
    IconButton
} from '../../components'


import { FONTS, SIZES, COLORS, dummyData, icons, images } from '../../constants'

const Notification = ({ navigation, route }) => {

    const [home, setHome] = useState(null)

    const [daily, setDaily] = useState(false);
    const [promotional, setPromotional] = useState(false);


    useEffect(() => {
        let { home } = route.params

        setHome(home)
    }, [])

    // Render

    function renderHeader() {
        return (
            <Header
                title='NOTIFICATION'
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
                            width: 40,
                        }}
                    />
                }
            />
        )
    }

    function renderNotificationSetting() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding / 1.5
                }}
            >
                <View
                    style={{
                        backgroundColor: COLORS.lightGray2,
                        borderRadius: SIZES.radius,
                        padding: SIZES.padding / 1.5,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: SIZES.radius
                    }}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={icons.notification}
                            style={{
                                width: 32,
                                height: 32,
                                tintColor: COLORS.primary,
                                marginRight: SIZES.radius
                            }}
                        />
                        <View>
                            <Text style={{
                                ...FONTS.h3
                            }}>
                                Notification
                            </Text>
                            <Text style={{
                                ...FONTS.body4,
                                color: COLORS.gray
                            }}>
                                You will receive daily updates
                            </Text>
                        </View>
                    </View>
                    <CustomSwitch
                        value={daily}
                        onChange={(value => setDaily(value))}
                        textStyle={{
                            display: 'none'
                        }}
                    />
                </View>
                <View
                    style={{
                        backgroundColor: COLORS.lightGray2,
                        borderRadius: SIZES.radius,
                        padding: SIZES.padding / 1.5,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={icons.notification}
                            style={{
                                width: 32,
                                height: 32,
                                tintColor: COLORS.primary,
                                marginRight: SIZES.radius
                            }}
                        />
                        <View>
                            <Text style={{
                                ...FONTS.h3
                            }}>
                                Promotional Notification
                            </Text>
                            <Text style={{
                                ...FONTS.body4,
                                color: COLORS.gray
                            }}>
                                You will receive daily updates
                            </Text>
                        </View>
                    </View>
                    <CustomSwitch
                        value={promotional}
                        onChange={(value => setPromotional(value))}
                        textStyle={{
                            display: 'none'
                        }}
                    />
                </View>
            </View>
        )
    }

    function renderNotificationTab(date) {
        return (
            <View style={{
                marginTop: SIZES.base
            }}>
                <Text style={{
                    ...FONTS.body3,
                    marginBottom: SIZES.radius
                }}>
                    {date}
                </Text>
                <View style={{
                    backgroundColor: COLORS.lightGray2,
                    borderRadius: SIZES.radius,
                    marginBottom: SIZES.radius,
                    display: 'flex',
                    flexDirection: 'row',
                    padding: SIZES.radius
                }}>
                    <View
                        style={{
                            backgroundColor: COLORS.primary,
                            borderRadius: SIZES.radius,
                            padding: SIZES.radius * 1.5,
                            width: 60,
                            height: 60,
                            marginRight: SIZES.radius * 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={images.pizzaHut}
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <Text style={{
                            ...FONTS.h3
                        }}>
                            Pizza Hut - Buy 1 get 1 Free
                        </Text>
                        <Text style={{
                            ...FONTS.body4,
                            color: COLORS.gray
                        }}>
                            Buy 1 get 1 free for small sizes untill Nov 30, 2023
                        </Text>
                        <Text style={{
                            ...FONTS.h5
                        }}>
                            a few seconds ago
                        </Text>
                    </View>
                </View>
                <View style={{
                    backgroundColor: COLORS.lightGray2,
                    borderRadius: SIZES.radius,
                    marginBottom: SIZES.radius,
                    display: 'flex',
                    flexDirection: 'row',
                    padding: SIZES.radius
                }}>
                    <View
                        style={{
                            backgroundColor: COLORS.primary,
                            borderRadius: SIZES.radius,
                            padding: SIZES.radius * 1.5,
                            width: 60,
                            height: 60,
                            marginRight: SIZES.radius * 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={images.KFC}
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <Text style={{
                            ...FONTS.h3
                        }}>
                            Veg Biryani - 35% sale today
                        </Text>
                        <Text style={{
                            ...FONTS.body4,
                            color: COLORS.gray
                        }}>
                            Buy 1 get 1 free for small sizes untill Nov 30, 2023
                        </Text>
                        <Text style={{
                            ...FONTS.h5
                        }}>
                            5 mins ago
                        </Text>
                    </View>
                </View>
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
            {!home && renderHeader()}

            {/* Notification Settings */}
            {!home && renderNotificationSetting()}

            {/* Notification Tab */}
            {home && 
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {renderNotificationTab('Today')}
                    {renderNotificationTab('Yesterday')}
                </ScrollView>
            }


        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    }
})

export default Notification;