import { StyleSheet, Image, SafeAreaView, Pressable, ScrollView, FlatList } from "react-native";
import { Text, View } from "../components/Themed";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import organizations from "../data/organizations.js";
import CausesButton from "../components/CausesButton";
import causes from "../data/causes.js";

export default function Browse() {
    const renderItem = (item) => (
        <CausesButton 
        id={item.id}
        cause={item.cause}
        />
    )

    return (
        <SafeAreaView> 
            <Text> Browse Causes</Text>
            <FlatList
                data={causes} // the array of data that the FlatList displays
                renderItem={({ item }) => renderItem(item)} // function that renders each item
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },


})