import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Events from "./src/pages/Events/";
import NewEvent from "./src/pages/NewEvent/";
import Details from "./src/pages/Details/";
import SignUp from "./src/pages/SignUp/";
import Login from "./src/pages/Login/";

import colors from "./src/components/Colors";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor: colors.baseColor,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTintColor: colors.baseColor,
          }}
        />
        <Stack.Screen
          name="Events"
          component={Events}
          options={{
            headerTintColor: colors.baseColor,
          }}
        />
        <Stack.Screen
          name="New Event"
          component={NewEvent}
          options={{
            headerTintColor: colors.baseColor,
          }}

        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: colors.baseColor,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}