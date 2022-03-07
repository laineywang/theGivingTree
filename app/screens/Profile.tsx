import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";

import {
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import SearchBar from "../components/SearchBar";
import organizations from "../data/organizations.js";
import OrgsButton from "../components/OrgsButton";
import OrgDetails from "./OrgDetails";
import DonateModal from "./DonateModal";
import ConfirmModal from "./ConfirmModal";
import ThankYou from "./ThankYou";
import colors from "../Themes/Colors";
import Forms from "./Forms"

export default function Profile() {
    const navigation = useNavigation();
    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator>
          <HomeStack.Screen
            name="Home"
            component={Profile}
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

    function Profile() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Your Profile</Text>
                <View style={styles.donations_back}>
                    <Text style={styles.headers}>YOUR DONATIONS</Text>
                </View>
                <View style={styles.trans_back}>
                    <Text style={styles.headers}>RECENT TRANSACTIONS</Text>
                </View>
                <Pressable style={styles.bottom_buttons} onPress={() => navigation.navigate("Forms")}>
                    <Text style={styles.bottom_headers}>FORMS</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.lightgreen,
    },

    title: {
        paddingTop: 20,
        fontSize: 35,
        fontWeight: "bold",
        color: colors.darkgreen,
        textAlign: "center",
        paddingBottom: 20,
    },

    donations_back: {
        width: '90%',
        height: '30%',
        borderRadius: 16,
    }, 

    headers: {
        paddingTop: 20,
        fontSize: 20, 
        color: colors.darkgreen, 
        textAlign: 'center',
    },

    pie_chart: {
        
    }, 

    trans_back:{
        marginTop: 20,
        width: '90%',
        height: '35%',
        borderRadius: 16,
    },
    
    recent_trans: {

    },

    bottom_buttons: {
        marginTop: 20,
        width: '90%',
        height: '10%',
        borderRadius: 16,
        backgroundColor: colors.darkgreen,
        shadowColor: "gray",
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 2 },
    },

    bottom_headers: {
        paddingTop: 20,
        fontSize: 30, 
        color: 'white', 
        textAlign: 'center',
    }
});