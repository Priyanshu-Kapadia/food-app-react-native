import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Animated,
    Dimensions
} from 'react-native';

import { constants, images, FONTS, SIZES, COLORS } from "../../constants"

import { TextButton } from '../../components'

const OnBoarding = ({ navigation }) => {
    var topData = 0;
    var widthImage = 0;
    var heightImage = 0;
    var ImageBottomMargin = 0;

    if (Dimensions.get("window").width >= 768) {
        topData = SIZES.height > 800 ? 50 : 25
        widthImage = SIZES.width * 0.5
        heightImage = SIZES.width * 0.5
        ImageBottomMargin = SIZES.padding * 2
      } else {
        topData = SIZES.height > 800 ? 50 : 25
        widthImage = SIZES.width * 0.8
        heightImage = SIZES.width * 0.8
        ImageBottomMargin = -SIZES.padding
      }

    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef()

    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewChangeRef = useRef(({ viewableItems, changed }) => {
        setCurrentIndex(viewableItems[0].index)
    })

    const Dots = () => {
        const dotPostion = Animated.divide(scrollX, SIZES.width)
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {
                    constants.onboarding_screens.map((item, index) => {
                        const dotColor = dotPostion.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
                            extrapolate: "clamp"
                        })

                        const dotWidth = dotPostion.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [10, 30, 10],
                            extrapolate: "clamp"
                        })

                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                style={{
                                    borderRadius: 5,
                                    marginHorizontal: 6,
                                    height: 10,
                                    width: dotWidth,
                                    backgroundColor: dotColor
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }

    function renderHeaderLogo() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: topData,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={images.logo_02}
                    resizeMode='contain'
                    style={{
                        width: SIZES.width * 0.5,
                        height: 100
                    }}
                />
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    height: 160
                }}
            >
                {/* Pagination */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}
                >
                    <Dots />
                </View>

                {/* Buttons */}
                {currentIndex < constants.onboarding_screens.length - 1 &&
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: SIZES.padding,
                            marginVertical: SIZES.padding
                        }}
                    >
                        <TextButton
                            label="Skip"
                            buttonContainerStyle={{
                                backgroundColor: null
                            }}
                            labelStyle={{
                                color: COLORS.darkGray2
                            }}
                            onPress={() => navigation.replace("SignIn")}
                        />

                        <TextButton
                            label="Next"
                            buttonContainerStyle={{
                                height: 60,
                                width: 200,
                                borderRadius: SIZES.radius,
                            }}
                            onPress={() => {
                                // Scroll to Next item
                                flatListRef?.current?.scrollToIndex({
                                    index: currentIndex + 1,
                                    animated: true
                                })
                            }}
                        />
                    </View>
                }
                {currentIndex == constants.onboarding_screens.length - 1 &&
                    <View
                        style={{
                            paddingHorizontal: SIZES.padding,
                            marginVertical: SIZES.padding
                        }}
                    >
                        <TextButton
                            label="Let's Get Started"
                            buttonContainerStyle={{
                                height: 60,
                                borderRadius: SIZES.radius
                            }}
                            onPress={() => navigation.replace("SignIn")}
                        />
                    </View>
                }
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >
            {renderHeaderLogo()}
            <Animated.FlatList
                horizontal
                ref={flatListRef}
                pagingEnabled
                data={constants.onboarding_screens}
                scrollEventThrottle={16}
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [
                        { nativeEvent: { contentOffset: { x: scrollX } } }
                    ],
                    { useNativeDriver: false }
                )}
                onViewableItemsChanged={onViewChangeRef.current}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: SIZES.width
                            }}
                        >
                            {/* Header */}
                            <View
                                style={{
                                    flex: 3
                                }}
                            >
                                <ImageBackground
                                    source={item.backgroundImage}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        height: Dimensions.get("window").width >= 768 ? index == 1 ? '80%' : '80%' : index == 1 ? '96%' : '100%',
                                        width: '100%'
                                    }}
                                >
                                    <Image
                                        source={item.bannerImage}
                                        resizeMode='contain'
                                        style={{
                                            width: widthImage,
                                            height: heightImage,
                                            marginBottom: ImageBottomMargin
                                        }}
                                    />
                                </ImageBackground>
                            </View>

                            {/* Detail */}
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: SIZES.radius
                                }}
                            >
                                <Text
                                    style={{
                                        ...FONTS.h1, fontSize: 25
                                    }}
                                >{item.title}</Text>
                                <Text
                                    style={{
                                        marginTop: SIZES.radius,
                                        textAlign: 'center',
                                        color: COLORS.darkGray,
                                        paddingHorizontal: SIZES.padding,
                                        ...FONTS.body3
                                    }}
                                >{item.description}</Text>
                            </View>
                        </View>
                    )
                }}
            />

            {renderFooter()}
        </View>
    )
}

export default OnBoarding;