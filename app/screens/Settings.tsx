import { NavigationContainer } from "@react-navigation/native";
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
import { Text, View } from "../components/Themed";
import colors from "../Themes/Colors";

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.back}>
                <Text style={styles.headings}>Account</Text>

            </View>
            <View style={styles.back}>
                <Text style={styles.headings}>Payment Information</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    title: {
        paddingTop: 20,
        fontSize: 35,
        fontWeight: "bold",
        color: colors.darkgreen,
        textAlign: "center",
        paddingBottom: 20,
    },

    back: {
        width: '90%',
        height: '30%',
        borderRadius: 16,
        backgroundColor: colors.lightgreen,
        marginBottom: 20,
    }, 

    headings: {
        paddingTop: 15, 
        fontSize: 25, 
        color: colors.darkgreen, 
        textAlign: 'left',
        left: 15,
    }


});