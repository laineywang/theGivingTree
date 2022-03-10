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
import { useNavigation } from "@react-navigation/native";

export default function Settings() {
    const [name, setName] = useState();
    const [age, setAge] = useState(); 
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => navigation.navigate("EditSettings")}
                style={styles.edit_button}
            />
            <Text style={styles.title}>Settings</Text>
            <View style={styles.back}>
                <Text style={styles.headings}>Account</Text>
                <View style={styles.text}>
                    <Text style={styles.label}>Name:     </Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="e.g. John Doe"
                    onChangeText={(val) => setName(val)}
                    />
                </View> 
                <View style={styles.text}>
                    <Text style={styles.label}>Pronouns: </Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="e.g. she/her"
                    onChangeText={(val) => setName(val)}
                    />
                </View> 
                <View style={styles.text}>
                    <Text style={styles.label}>Email:      </Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="e.g. johndoe@gmail.com"
                    onChangeText={(val) => setName(val)}
                    />
                </View> 
                <View style={styles.text}>
                    <Text style={styles.label}>Phone:    </Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="e.g. 120-456-7890"
                    onChangeText={(val) => setName(val)}
                    />
                </View> 
            </View>
            <View style={styles.back}>
                <Text style={styles.headings}>Card Information</Text>
                <View style={styles.text}>
                    <Text style={styles.label}> First Name: </Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="e.g. John"
                    onChangeText={(val) => setName(val)}
                    />
                </View> 
                <View style={styles.text}>
                    <Text style={styles.label}> Last Name: </Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="e.g. Do"
                    onChangeText={(val) => setName(val)}
                    />
                </View> 
                <View style={styles.text}>
                    <Text style={styles.label}> Card Number: </Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="e.g. 1234 5678 1234 5678"
                    onChangeText={(val) => setName(val)}
                    />
                </View> 
                <View style={styles.small_text}>
                <View style={styles.text}>
                    <Text style={styles.label}> CVV: </Text>
                    <TextInput 
                    style={styles.small_input}
                    placeholder="e.g. 123"
                    onChangeText={(val) => setName(val)}
                    />
                </View> 
                <View style={styles.text}>
                    <Text style={styles.label}> MM/YY </Text>
                    <TextInput 
                    style={styles.small_input}
                    placeholder="e.g. 08/12"
                    onChangeText={(val) => setName(val)}
                    />
                </View> 
                </View>
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

    edit_button: {
        width: '20%',
        height: '10%',
        backgroundColor: colors.lightgreen
    },

    title: {
        paddingTop: 20,
        fontSize: 35,
        fontWeight: "bold",
        color: colors.darkgreen,
        textAlign: "center",
        paddingBottom: 20,
        fontFamily: 'Nunito-Bold',
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
        fontFamily: 'Nunito',
    },

    text: {
        flexDirection: 'row',
        backgroundColor: colors.lightgreen, 
        left: 15,
        marginTop: 20,
        width: '90%',
        fontFamily: 'Nunito',
    },

    small_text: {
        flexDirection: 'row',
        backgroundColor: colors.lightgreen, 
    },

    label: {
        fontSize: 15, 
        marginRight: 10, 
    },


    input: {
        borderWidth:1, 
        borderColor: "#777",
        width: 200, 
    },

    small_input: {
        borderWidth:1, 
        borderColor: "#777",
        width: 80, 
    }



});