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
  import colors from '../Themes/Colors';


  const CausesButton = ({ id, cause}) => {
    const navigation = useNavigation();
  
    return (
      <Pressable
        style={styles.causes_button}
        onPress={() => navigation.navigate("OrganizationsFor", {id:id, cause:cause})}
      >
        {/* <Image style={styles.logo} source={require(organization.image)} /> */}
        {/* <Image style={styles.logo} source={logo}/> */}
        <Text style={styles.cause_name}> {cause}</Text>
      </Pressable>
    );
  };
  
  const styles = StyleSheet.create({
    causes_button: {
      backgroundColor: colors.lightgreen,
      shadowColor: "gray",
      shadowOpacity: 0.4,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 2 },
      borderRadius: 100,
      height: 150,
      width: 150,
      flexDirection: "row",
  
    },
  
    cause_name: {
      top: 10,
      fontSize: 25,
      color: "black",
      fontWeight: "bold",
      top: 50,
      textAlign: 'center',
    },
  
    cause_image: {
      top: 10,
      height: 50,
      width: 70,
      resizeMode: "contain",
    },
  });
  
  export default CausesButton;
  