import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import {
    Header,
    IconButton,
    CardQuantityButton,
    StepperInput
} from '../../components'

import { SwipeListView } from 'react-native-swipe-list-view'

import {FONTS, SIZES, COLORS, dummyData, icons} from '../../constants'

const MyCart = ({ navigation }) => {

    const [myCartList, setMyCartList] = useState(dummyData.myCart);

    // Handler
    function updateQuantityHandler(newQty, id) {
        const newMyCartList = myCartList.map(cl=>(
            cl.id === id ? {...cl, qty: newQty} : cl
        ))

        setMyCartList(newMyCartList)
    }

    // Render

    function renderHeader() {
        return (
            <Header 
                title='MY CART'
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
                    <CardQuantityButton
                        qunatity={3}
                    />
                }
            />
        )
    }

    function renderCartList() {
        return (
            <SwipeListView 
                data={myCartList}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding * 2
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) => (
                    <View
                        style={{
                            height: 100,
                            backgroundColor: COLORS.lightGray2,
                            ...styles.cartItemContainer
                        }}
                    >
                        {/* Food Image */}
                        <View
                            style={{
                                width: 90,
                                height: 100,
                                marginLeft: -10
                            }}
                        >
                            <Image 
                                source={data.item.image}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 10
                                }}
                            />
                        </View>

                        {/* Food Info */}
                        <View
                            style={{
                                flex: 1,
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.body3
                                }}
                            >
                                {data.item.name}
                            </Text>
                            <Text
                                style={{
                                    color: COLORS.primary,
                                    ...FONTS.h3
                                }}
                            >
                                $ {data.item.price}
                            </Text>
                        </View>

                        {/* Quantity */}
                        <StepperInput 
                            containerStyle={{
                                height: 50,
                                width: 125,
                                backgroundColor: COLORS.white
                            }}
                            value={data.item.qty}
                            onAdd={()=> updateQuantityHandler(data.item.qty + 1, data.item.id)}
                            onMinus={()=> {
                                if(data.item.qty > 1) {
                                    updateQuantityHandler(data.item.qty - 1,data.item.id)
                                }
                            }}
                        />
                    </View>
                )}
            />
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

            {/* Cart List */}
            {renderCartList()}

            {/* Footer */}
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

export default MyCart;