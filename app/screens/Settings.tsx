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
  TextInput
} from "react-native";
import { Text, View } from "../components/Themed";
import colors from "../Themes/Colors";

export default function Settings() {
    const [name, setName] = useState();
    const [age, setAge] = useState(); 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.back}>
                <Text style={styles.headings}>Account</Text>
                <View style={styles.text}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="e.g. John Doe"
                    onChangeText={(val) => setName(val)}
                    />
                </View> 
                <View style={styles.text}>
                    <Text style={styles.label}>Email: </Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="e.g. johndoe@gmail.com"
                    onChangeText={(val) => setName(val)}
                    />
                </View> 
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
    },

    text: {
        flexDirection: 'row',
        backgroundColor: colors.lightgreen, 
        left: 15,
        marginTop: 10,
        width: '90%',
    },

    label: {
        fontSize: 15, 
        marginRight: 10, 
    },

    input: {
        borderWidth:1, 
        borderColor: "#777",
        width: 200, 
    }


});