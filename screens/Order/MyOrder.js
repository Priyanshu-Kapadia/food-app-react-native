import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'

import { Header, TextButton, IconButton, TextIconButton, IconLabel } from '../../components'

import { FONTS, COLORS, SIZES, icons, dummyData } from '../../constants'

const MyOrder = ({ navigation }) => {

  const [active, setActive] = useState('history')

  function renderHeader() {
    return (
      <Header
        title='MY ORDERS'
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

  function renderTab() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          marginVertical: SIZES.radius
        }}
      >
        {/* History */}
        <TextButton
          label='History'
          buttonContainerStyle={{
            width: '48%',
            borderRadius: SIZES.base,
            marginRight: SIZES.radius,
            backgroundColor: active == 'history' ? COLORS.primary : COLORS.lightOrange2
          }}
          labelStyle={{
            color: active == 'history' ? COLORS.white : COLORS.primary
          }}
          onPress={() => {
            setActive('history')
          }}
        />

        {/* Upcoming */}
        <TextButton
          label='Upcoming'
          buttonContainerStyle={{
            width: '48%',
            borderRadius: SIZES.base,
            backgroundColor: active == 'upcoming' ? COLORS.primary : COLORS.lightOrange2
          }}
          labelStyle={{
            color: active == 'upcoming' ? COLORS.white : COLORS.primary
          }}
          onPress={() => {
            setActive('upcoming')
          }}
        />
      </View>
    )
  }

  function renderActiveTab() {
    return (
      <View>
        {dummyData.MyOrders.map((item, index) => {
          return (
            <View key={item.id}>
              {active == 'history' ? !item.foodIsOnWay &&
                <View
                  style={{
                    display: 'flex',
                  }}
                >
                  <Text style={{ color: COLORS.gray, ...FONTS.body4, marginVertical: SIZES.base }}>{item.orderDate}</Text>
                  <View style={{
                    backgroundColor: COLORS.lightGray2,
                    padding: SIZES.radius,
                    borderRadius: SIZES.radius,
                  }}>
                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}>
                      {/* Image View */}
                      <View style={{
                        backgroundColor: COLORS.white,
                        width: 75,
                        height: 75,
                        borderRadius: SIZES.radius,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                        <Image
                          source={item.image}
                          style={{
                            width: 40,
                            height: 40
                          }}
                        />
                      </View>

                      {/* Order Info */}
                      <View
                        style={{
                          flex: 1,
                          paddingLeft: SIZES.radius
                        }}
                      >
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                          }}
                        >
                          <Text style={{
                            ...FONTS.h3
                          }}>
                            {item.name}
                          </Text>
                          <Text style={{
                            ...FONTS.h3,
                            color: COLORS.primary
                          }}>
                            $ {item.price}
                          </Text>
                        </View>
                        <Text style={{
                          ...FONTS.body5,
                          color: COLORS.gray,
                        }}>
                          {item.orderDate}  {item.time}  -  {item.items.length} items
                        </Text>
                        <IconLabel
                          containerStyle={{
                            alignItems: 'center',
                            paddingHorizontal: 0,
                            paddingVertical: 0
                          }}
                          icon={icons.check_on}
                          iconStyle={{
                            tintColor: item.foodIsOnWay ? COLORS.yellow : (item.orderStatus == 'Order Delivered' ? COLORS.green : COLORS.red),
                            width: 10,
                            height: 10
                          }}
                          label={item.orderStatus}
                          labelStyle={{
                            color: item.foodIsOnWay ? COLORS.yellow : (item.orderStatus == 'Order Delivered' ? COLORS.green : COLORS.red),
                            ...FONTS.body5
                          }}
                        />
                      </View>


                    </View>
                    {/* Buttons */}
                    <View
                      style={{
                        flexDirection: 'row',
                        height: 40,
                        marginTop: SIZES.radius
                      }}
                    >
                      {/* Button - 1 */}
                      <TextButton
                        label={active == 'history' ? 'Re-Order' : 'Track Order'}
                        buttonContainerStyle={{
                          width: '48%',
                          borderRadius: SIZES.base,
                          marginRight: SIZES.radius,
                          backgroundColor: COLORS.primary
                        }}
                        labelStyle={{
                          color: COLORS.white
                        }}
                        onPress={() => {

                        }}
                      />

                      {/* Button - 2 */}
                      <TextButton
                        label={active == 'history' ? 'Rate' : 'Cancel'}
                        buttonContainerStyle={{
                          width: '48%',
                          borderRadius: SIZES.base,
                          backgroundColor: COLORS.lightOrange2
                        }}
                        labelStyle={{
                          color: COLORS.primary
                        }}
                        onPress={() => {

                        }}
                      />
                    </View>
                  </View>
                </View> : item.foodIsOnWay &&
              <View
                style={{
                  display: 'flex',
                }}
              >
                <Text style={{ color: COLORS.gray, ...FONTS.body4, marginVertical: SIZES.base }}>{item.orderDate}</Text>
                <View style={{
                  backgroundColor: COLORS.lightGray2,
                  padding: SIZES.radius,
                  borderRadius: SIZES.radius,
                }}>
                  <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}>
                    {/* Image View */}
                    <View style={{
                      backgroundColor: COLORS.white,
                      width: 75,
                      height: 75,
                      borderRadius: SIZES.radius,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <Image
                        source={item.image}
                        style={{
                          width: 40,
                          height: 40
                        }}
                      />
                    </View>

                    {/* Order Info */}
                    <View
                      style={{
                        flex: 1,
                        paddingLeft: SIZES.radius
                      }}
                    >
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Text style={{
                          ...FONTS.h3
                        }}>
                          {item.name}
                        </Text>
                        <Text style={{
                          ...FONTS.h3,
                          color: COLORS.primary
                        }}>
                          $ {item.price}
                        </Text>
                      </View>
                      <Text style={{
                        ...FONTS.body5,
                        color: COLORS.gray,
                      }}>
                        {item.orderDate}  {item.time}  -  {item.items.length} items
                      </Text>
                      <IconLabel
                        containerStyle={{
                          alignItems: 'center',
                          paddingHorizontal: 0,
                          paddingVertical: 0
                        }}
                        icon={icons.check_on}
                        iconStyle={{
                          tintColor: item.foodIsOnWay ? COLORS.yellow : (item.orderStatus == 'Order Delivered' ? COLORS.green : COLORS.red),
                          width: 10,
                          height: 10
                        }}
                        label={item.orderStatus}
                        labelStyle={{
                          color: item.foodIsOnWay ? COLORS.yellow : (item.orderStatus == 'Order Delivered' ? COLORS.green : COLORS.red),
                          ...FONTS.body5
                        }}
                      />
                    </View>


                  </View>
                  {/* Buttons */}
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 40,
                      marginTop: SIZES.radius
                    }}
                  >
                    {/* Button - 1 */}
                    <TextButton
                      label={active == 'history' ? 'Re-Order' : 'Track Order'}
                      buttonContainerStyle={{
                        width: '48%',
                        borderRadius: SIZES.base,
                        marginRight: SIZES.radius,
                        backgroundColor: COLORS.primary
                      }}
                      labelStyle={{
                        color: COLORS.white
                      }}
                      onPress={() => {

                      }}
                    />

                    {/* Button - 2 */}
                    <TextButton
                      label={active == 'history' ? 'Rate' : 'Cancel'}
                      buttonContainerStyle={{
                        width: '48%',
                        borderRadius: SIZES.base,
                        backgroundColor: COLORS.lightOrange2
                      }}
                      labelStyle={{
                        color: COLORS.primary
                      }}
                      onPress={() => {

                      }}
                    />
                  </View>
                </View>
              </View>}
            </View>
          )
        })}
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        // paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white
      }}
    >
      {/* Header */}
      {renderHeader()}

      <View
        style={{
          paddingHorizontal: SIZES.padding
        }}
      >
        {/* Button for Tabing */}
        {renderTab()}

        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {/* Main Section */}
          {renderActiveTab()}
        </ScrollView>
      </View>
    </View>
  )
}

export default MyOrder