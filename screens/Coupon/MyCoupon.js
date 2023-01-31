import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'

import { Header, TextButton, IconButton, TextIconButton, IconLabel } from '../../components'

import { FONTS, COLORS, SIZES, icons, dummyData } from '../../constants'

const MyCoupon = ({ navigation }) => {

  const [active, setActive] = useState('avaliable')

  function renderHeader() {
    return (
      <Header
        title='MY COUPONS'
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
          label='Avaliable'
          buttonContainerStyle={{
            width: '48%',
            borderRadius: SIZES.base,
            marginRight: SIZES.radius,
            backgroundColor: active == 'avaliable' ? COLORS.primary : COLORS.lightOrange2
          }}
          labelStyle={{
            color: active == 'avaliable' ? COLORS.white : COLORS.primary
          }}
          onPress={() => {
            setActive('avaliable')
          }}
        />

        {/* Upcoming */}
        <TextButton
          label='Used'
          buttonContainerStyle={{
            width: '48%',
            borderRadius: SIZES.base,
            backgroundColor: active == 'used' ? COLORS.primary : COLORS.lightOrange2
          }}
          labelStyle={{
            color: active == 'used' ? COLORS.white : COLORS.primary
          }}
          onPress={() => {
            setActive('used')
          }}
        />
      </View>
    )
  }

  function renderActiveTab() {
    return (
      <View>
        {dummyData.MyCoupons.map((item, index) => {
          return (
            <View>
              {active == 'avaliable' ? item.avaliable && <View
              style={{
                display: 'flex',
              }}
            >
              <View style={{
                backgroundColor: COLORS.lightGray2,
                paddingVertical: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                paddingLeft: SIZES.padding * 1.5,
                borderRadius: SIZES.radius,
                marginVertical: SIZES.base,
                position: 'relative'
              }}>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                  {/* Image View */}
                  <Image
                    source={item.image}
                    style={{
                      width: 80,
                      height: 80
                    }}
                  />

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
                        ...FONTS.body4
                      }}>
                        {item.name}
                      </Text>
                    </View>
                    <Text style={{
                      ...FONTS.h2,
                      color: COLORS.black
                    }}>
                      $ {item.offer}
                    </Text>
                    <Text style={{
                      ...FONTS.body4,
                      color: COLORS.gray,
                    }}>
                      Vaild until {item.validDate}
                    </Text>
                  </View>
                </View>
              </View>
              <View 
                style={{
                  position: 'absolute',
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  top: '40%',
                  left: '-5%',
                  backgroundColor: COLORS.white
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  right: '-3%',
                  top: '18%',
                }}
              >
              <View 
                style={{
                  height: 23,
                  width: 23,
                  borderRadius: 50,
                  backgroundColor: COLORS.white,
                  marginBottom: SIZES.base /2
                }}
              />
              <View 
                style={{
                  height: 23,
                  width: 23,
                  borderRadius: 50,
                  backgroundColor: COLORS.white,
                  marginBottom: SIZES.base /2
                }}
              />
              <View 
                style={{
                  height: 23,
                  width: 23,
                  borderRadius: 50,
                  backgroundColor: COLORS.white
                }}
              />
              </View>
            </View> : !item.avaliable && <View
              style={{
                display: 'flex',
              }}
            >
              <View style={{
                backgroundColor: COLORS.lightGray2,
                paddingVertical: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                paddingLeft: SIZES.padding * 1.5,
                borderRadius: SIZES.radius,
                marginVertical: SIZES.base,
                position: 'relative'
              }}>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                  {/* Image View */}
                  <Image
                    source={item.image}
                    style={{
                      width: 80,
                      height: 80
                    }}
                  />

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
                        ...FONTS.body4
                      }}>
                        {item.name}
                      </Text>
                    </View>
                    <Text style={{
                      ...FONTS.h2,
                      color: COLORS.black
                    }}>
                      $ {item.offer}
                    </Text>
                    <Text style={{
                      ...FONTS.body4,
                      color: COLORS.gray,
                    }}>
                      Vaild until {item.validDate}
                    </Text>
                  </View>
                </View>
              </View>
              <View 
                style={{
                  position: 'absolute',
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  top: '40%',
                  left: '-5%',
                  backgroundColor: COLORS.white
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  right: '-3%',
                  top: '18%',
                }}
              >
              <View 
                style={{
                  height: 23,
                  width: 23,
                  borderRadius: 50,
                  backgroundColor: COLORS.white,
                  marginBottom: SIZES.base /2
                }}
              />
              <View 
                style={{
                  height: 23,
                  width: 23,
                  borderRadius: 50,
                  backgroundColor: COLORS.white,
                  marginBottom: SIZES.base /2
                }}
              />
              <View 
                style={{
                  height: 23,
                  width: 23,
                  borderRadius: 50,
                  backgroundColor: COLORS.white
                }}
              />
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

export default MyCoupon