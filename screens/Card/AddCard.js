import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    Dimensions
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { FormInput, FormInputCheck, Header, IconButton, RadioButton, TextButton } from '../../components'

import { FONTS, SIZES, COLORS, icons, images } from '../../constants'

import { utils } from '../../utils'

const AddCard = ({ navigation, route }) => {

    const [selectedCard, setSelectedCard] = useState(null)

    const [cardNumber, setCardNumber] = useState("")
    const [cardNumberError, setCardNumberError] = useState("")
    const [cardName, setCardName] = useState("")
    const [cardNameError, setCardNameError] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [expiryDateError, setExpiryDateError] = useState("")
    const [cvv, setCvv] = useState("")
    const [cvvError, setCvvError] = useState("")
    const [isRemember, setIsRemember] = useState(false)

    useEffect(() => {
        let { selectedCard } = route.params

        setSelectedCard(selectedCard)
    }, [])

    // iPad and Mobile responsive
    var CardWidth = 0;
    if (Dimensions.get("window").width >= 768) {
        CardWidth = 350;
    } else {
        CardWidth = 200;
    }

    function isEnableAddCard() {
        return cardNumber != "" && cardName != "" && expiryDate != "" && cvv != "" && cardNumberError == "" && cardNameError == "" && expiryDateError == "" && cvvError == ""
    }

    function renderHeader() {
        return (
            <Header
                title='ADD NEW CARD'
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
                    <View
                        style={{
                            width: 40
                        }}
                    />
                }
            />
        )
    }

    function renderCard() {
        return (
            <ImageBackground
                source={images.card}
                style={{
                    height: CardWidth,
                    width: "100%",
                    marginTop: SIZES.radius,
                    borderRadius: SIZES.radius,
                    overflow: 'hidden'
                }}
            >
                {/* Logo */}
                <Image
                    source={selectedCard?.icon}
                    resizeMode="contain"
                    style={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        width: selectedCard?.name == 'Visa' ? 80 : 40,
                        height: 40
                    }}
                />

                {/* Details */}
                <View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        left: 0,
                        right: 0,
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h3
                        }}
                    >
                        {cardName}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                        >
                            {cardNumber}
                        </Text>

                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                        >
                            {expiryDate}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 2
                }}
            >
                {/* Card Number */}
                <FormInput
                    label="Card Number"
                    keyboardType="number-pad"
                    value={cardNumber}
                    maxLength={19}
                    onChange={(value) => {
                        setCardNumber(value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())
                        utils.validateInput(value, 19, setCardNumberError)
                    }}
                    errorMsg={cardNumberError}
                    appendComponent={
                        <FormInputCheck
                            value={cardNumber}
                            error={cardNumberError}
                        />
                    }
                />

                {/* Card Holder NAme */}
                <FormInput
                    label="Card Holder Name"
                    value={cardName}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        setCardName(value)
                        utils.validateInput(value, 1, setCardNameError)
                    }}
                    errorMsg={cardNameError}
                    appendComponent={
                        <FormInputCheck
                            value={cardName}
                            error={cardNameError}
                        />
                    }
                />

                {/* Expiry Date and CVV */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius
                    }}
                >
                    {/* Expiry date */}
                    <FormInput
                        label="Expiry Date"
                        value={expiryDate}
                        maxLength={5}
                        placeholder="MM/YY"
                        containerStyle={{
                            flex: 1,
                        }}
                        onChange={(value) => {
                            setExpiryDate(value)
                            utils.validateInput(value, 5, setExpiryDateError)
                        }}
                        appendComponent={
                            <FormInputCheck
                                value={expiryDate}
                                error={expiryDateError}
                            />
                        }
                    />

                    {/* Cvv */}
                    <FormInput
                        label="CVV"
                        value={cvv}
                        maxLength={3}
                        placeholder="123"
                        secureTextEntry={true}
                        containerStyle={{
                            flex: 1,
                            marginLeft: SIZES.radius
                        }}
                        onChange={(value) => {
                            setCvv(value)
                            utils.validateInput(value, 3, setCvvError)
                        }}
                        appendComponent={
                            <FormInputCheck
                                value={cvv}
                                error={cvvError}
                            />
                        }
                    />
                </View>

                {/* Remember */}
                <View
                    style={{
                        alignItems: 'flex-start',
                        marginTop: SIZES.padding
                    }}
                >
                    <RadioButton
                        label="Remember this card details"
                        isSelected={isRemember}
                        onPress={() => setIsRemember(!isRemember)}
                    />
                </View>
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <TextButton
                    disabled={!isEnableAddCard()}
                    buttonContainerStyle={{
                        height: 60,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableAddCard() ? COLORS.primary : COLORS.transparentPrimray
                    }}
                    label="Add Card"
                    onPress={() => navigation.goBack()}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Body */}
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* Card */}
                {renderCard()}

                {/* Forms */}
                {renderForm()}

            </KeyboardAwareScrollView>

            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

export default AddCard;