import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState, Component } from "react";

import Forms from "./Forms";
import ProfileComponent from "./ProfileComponent";

export default function Profile() {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Profile"
        component={ProfileComponent}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Forms"
        component={Forms}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "black",
          presentation: "card",
        }}
      />
    </HomeStack.Navigator>
  );
}
