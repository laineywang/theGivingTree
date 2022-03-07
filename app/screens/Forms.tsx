import * as React from "react";
import { Text, View, StyleSheet, Button, TextInput, Image, Pressable } from "react-native";
import colors from "../Themes/Colors";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";

export default function Forms(){
    const navigation = useNavigation();
    const HomeStack = createNativeStackNavigator();
    return (
      <View style={styles.container}>
            <Text style={styles.title}>Forms</Text>

            <View style={styles.tax_forms}>
                <Text style={styles.heading}>Tax From 8283</Text>
            </View>

            <View style={styles.past_transactions}>
                <Text style={styles.heading}>Past Transactions</Text>
            </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.lightgreen,
    },
    title: {
        paddingTop: '15%',
        fontSize: 35,
        fontWeight: "bold",
        color: colors.darkgreen,
        textAlign: "center",
        paddingBottom: 20,
    },
    tax_forms : {
        flex: 1,
        backgroundColor: 'white',
        maxWidth: '90%',
        marginVertical: 15,
        borderRadius: 30

    },
    past_transactions: {
        flex: 1.5,
        backgroundColor: 'white',
        maxWidth: '80%',
        marginVertical: 15,
        borderRadius: 30
    },
    heading: {
        textAlign: 'left',
        padding: 15,
        color: colors.darkgreen,
        fontSize: 25
    }
});