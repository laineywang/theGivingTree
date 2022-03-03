import {
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import { Text, View } from "../components/Themed";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const OrgsButton = ({ name, description, id, logo }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.org_button}
      onPress={() => navigation.navigate("OrgDetails", {name: name, description: description, id:id, logo:logo})}
    >
      {/* <Image style={styles.logo} source={require(organization.image)} /> */}
      <Image style={styles.logo} source={logo}/>
      <View style={styles.org_title_des}>
        <Text style={styles.org_title}> {name}</Text>
        <Text style={styles.org_description}> {description}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  org_button: {
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 2 },
    borderRadius: 16,
    height: 100,
    width: 320,
    flexDirection: "row",
  },

  org_title_des: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  org_title: {
    top: 10,
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
  },

  org_description: {
    top: 15,
    fontSize: 12,
    color: "gray",
  },

  logo: {
    top: 10,
    height: 50,
    width: 70,
    resizeMode: "contain",
  },
});

export default OrgsButton;
