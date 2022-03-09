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



  const CausesButton = ({ id, cause, icon}) => {
    const navigation = useNavigation();
  
    return (
      <Pressable
        style={styles.causes_button}
        onPress={() => navigation.navigate("OrganizationsFor", {id:id, cause:cause, icon:icon})}
      >
        <Image style={styles.icon} source={icon}/>
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
      margin: 15,
      marginHorizontal: 20,
      justifyContent: 'center',
    },
  

    cause_name: {
      fontSize: 16,
      color: "black",
      fontWeight: "bold",
      top: 85,
      textAlign: 'center',
      color: colors.darkgreen,
      right: 27,
      fontFamily: 'Nunito',
    },
  

    icon: {
      resizeMode: 'contain',
      color: colors.darkgreen,
      height: 50, 
      width: 50,
      left: 30,
      top: 25,
    }
  });
  
  export default CausesButton;
  