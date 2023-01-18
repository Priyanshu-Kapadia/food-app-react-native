import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerProgress,
} from "@react-navigation/drawer";

import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";

import { MainLayout } from "../screens";
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../constants";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.white,
        }}
      />
      <Text
        style={{
          marginLeft: 15,
          color: COLORS.white,
          ...FONTS.h3,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}
      >
        {/* Close */}
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{
                height: 35,
                width: 35,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              marginLeft: SIZES.radius,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
            >
              {dummyData.myProfile?.name}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body4,
              }}
            >
              View your Profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* DrawerItem */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
          }}
        >
          <CustomDrawerItem
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab === constants.screens.home}
            onPress={() => {
              setSelectedTab(constants.screens.home);
              navigation.navigate("MainLayout");
            }}
          />

          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
            isFocused={selectedTab === constants.screens.wallet}
            onPress={() => {
              setSelectedTab(constants.screens.wallet);
              navigation.navigate("MyWallet");
            }}
          />

          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab === constants.screens.notification}
            onPress={() => {
              setSelectedTab(constants.screens.notification);
              navigation.navigate("Notification");
            }}
          />

          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab === constants.screens.favourite}
            onPress={() => {
              setSelectedTab(constants.screens.favourite);
              navigation.navigate("Favourite");
            }}
          />

          {/* Line Divider */}
          <View
            style={{
              height: 1,
              width: "50%",
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />

          <CustomDrawerItem
            label={constants.screens.location}
            icon={icons.location}
            isFocused={selectedTab === constants.screens.location}
            onPress={() => {
              setSelectedTab(constants.screens.location);
              navigation.navigate("Location");
            }}
          />

          <CustomDrawerItem
            label={constants.screens.coupons}
            icon={icons.coupon}
            isFocused={selectedTab === constants.screens.coupons}
            onPress={() => {
              setSelectedTab(constants.screens.coupons);
              navigation.navigate("Coupons");
            }}
          />

          <CustomDrawerItem
            label={constants.screens.settings}
            icon={icons.setting}
            isFocused={selectedTab === constants.screens.settings}
            onPress={() => {
              setSelectedTab(constants.screens.settings);
              navigation.navigate("Settings");
            }}
          />

          <CustomDrawerItem
            label={constants.screens.invite}
            icon={icons.profile}
            isFocused={selectedTab === constants.screens.invite}
            onPress={() => {
              setSelectedTab(constants.screens.invite);
              navigation.navigate("Profile");
            }}
          />

          <CustomDrawerItem 
            label={constants.screens.help} 
            icon={icons.help} 
            isFocused={selectedTab === constants.screens.help}
            onPress={() => {
              setSelectedTab(constants.screens.help);
              navigation.navigate("Help");
            }}  
          />
        </View>

        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <CustomDrawerItem
            label={constants.screens.logout}
            icon={icons.logout}
            isFocused={selectedTab === constants.screens.logout}
            onPress={() => {
              setSelectedTab(constants.screens.logout);
              navigation.navigate("LogOut");
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Drawer.Navigator
        screenOptions={{
          drawerType: "slide",
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: "transparent",
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
          headerShown: false,
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          return (
            <CustomDrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        }}
        useLegacyImplementation
      >
        <Drawer.Screen name="MainLayout">
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

// export default CustomDrawer;

function mapStateToPRops(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToPRops, mapDispatchToProps)(CustomDrawer);
