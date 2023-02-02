import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import CustomDrawer from "./Navigation/CustomDrawer";

import * as ScreenOrientation from 'expo-screen-orientation';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import rootReducer from "./stores/rootReducer";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { LogBox } from 'react-native';

import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp,
  FoodDetail,
  Checkout,
  MyCart,
  MyCard,
  Success,
  AddCard,
  DeliveryStatus,
  Map,
  MyWallet,
  EditCard,
  Profile,
  EditAccount,
  RiderInfo,
  RiderReview,
  MyOrder,
  MyCoupon,
  MyAccount,
  Settings,
  Notification,
  ChangePassword
} from './screens'

LogBox.ignoreAllLogs();
const Stack = createStackNavigator();

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={"Home"}
          >
            <Stack.Screen name="Home" component={CustomDrawer} />
            <Stack.Screen
              name="OnBoarding"
              component={OnBoarding}
            />

            <Stack.Screen
              name="SignIn"
              component={SignIn}
            />

            <Stack.Screen
              name="SignUp"
              component={SignUp}
            />

            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
            />

            <Stack.Screen
              name="Otp"
              component={Otp}
            />

            <Stack.Screen
              name="FoodDetail"
              component={FoodDetail}
            />

            <Stack.Screen
              name="Checkout"
              component={Checkout}
            />

            <Stack.Screen
              name="MyCart"
              component={MyCart}
            />

            {/* Do Not Go Back For IOS Devices - Options*/}
            <Stack.Screen
              name="Success"
              component={Success}
              options={{ gestureEnabled: false }}
            />

            <Stack.Screen
              name="AddCard"
              component={AddCard}
            />

            <Stack.Screen
              name="MyCard"
              component={MyCard}
            />

            <Stack.Screen
              name="MyWallet"
              component={MyWallet}
            />

            <Stack.Screen
              name="EditCard"
              component={EditCard}
            />

            {/* Do Not Go Back For IOS Devices - Options */}
            <Stack.Screen
              name="DeliveryStatus"
              component={DeliveryStatus}
              options={{ gestureEnabled: false }}
            />

            <Stack.Screen
              name="Map"
              component={Map}
            />

            {/* Profile Navigation */}
            <Stack.Screen
              name="Profile"
              component={Profile}
            />

            <Stack.Screen
              name="EditAccount"
              component={EditAccount}
            />

            <Stack.Screen
              name="MyAccount"
              component={MyAccount}
            />

            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
            />

            {/* Rider Navigation */}
            <Stack.Screen
              name="RiderInfo"
              component={RiderInfo}
            />

            <Stack.Screen
              name="RiderReview"
              component={RiderReview}
            />

            {/* Order Navigation */}
            <Stack.Screen
              name="MyOrder"
              component={MyOrder}
            />

            {/* Coupon Navigation */}
            <Stack.Screen
              name="MyCoupon"
              component={MyCoupon}
            />

            {/* Settings Navigation */}
            <Stack.Screen
              name="Settings"
              component={Settings}
            />

            {/* Notification Navigation */}
            <Stack.Screen
              name="Notification"
              component={Notification}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
};

export default App;
