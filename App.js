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
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
};

export default App;
