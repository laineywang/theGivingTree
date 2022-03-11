import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, Component } from "react";

import {
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
  FlatList,
  TextInput,
  AsyncStorage,
} from "react-native";
import { Text, View } from "../components/Themed";
import colors from "../Themes/Colors";
import { useNavigation } from "@react-navigation/native";
import EditSettings from "./EditSettings";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      pronouns: "",
      email: "",
      phone: "",
    };
  }

  componentDidMount = () => {
    AsyncStorage.getItem("name").then((value) =>
      this.setState({ name: value })
    );
    AsyncStorage.getItem("pronouns").then((value) =>
      this.setState({ pronouns: value })
    );
    AsyncStorage.getItem("email").then((value) =>
      this.setState({ email: value })
    );
    AsyncStorage.getItem("phone").then((value) =>
      this.setState({ phone: value })
    );
  };


  render() {

    return (
      <View style={styles.container}>

        <Pressable
          onPress={() => this.props.navigation.navigate("EditSettings")}
          style={styles.edit_button}>
          <Image style={styles.edit_icon} source={require('../assets/images/edit.png')}></Image>
        </Pressable>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.back}>
          <Text style={styles.headings}>Account</Text>
          <View style={styles.text}>
            <Text style={styles.label}>Name: {this.state.name} </Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.label}>Pronouns: {this.state.pronouns} </Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.label}>Email: {this.state.email} </Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.label}>Phone: {this.state.phone} </Text>
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

          <View style={styles.small_text} width={"50%"}>
            <View style={styles.text}>
              <Text style={styles.label}> CVV: </Text>
              <TextInput
                style={styles.small_input}
                placeholder="e.g. 123"
                onChangeText={(val) => setName(val)}
              />
            </View>
            <View style={styles.text}>
              <Text style={styles.label}> MM/YY: </Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  edit_button: {
    width: "10%",
    height: "5%",
    flexDirection: 'row',
    marginLeft: '80%'
  },
  edit_icon: {
    height: '80%',
    width: '80%',
    resizeMode: 'contain',
  },
  title: {
    //marginTop: '2%',
    fontSize: 35,
    fontWeight: "bold",
    color: colors.darkgreen,
    textAlign: "center",
    paddingBottom: 20,
    fontFamily: "Nunito-Bold",
  },

  back: {
    width: "90%",
    height: "30%",
    borderRadius: 16,
    backgroundColor: colors.lightgreen,
    marginBottom: 20,
  },

  headings: {
    paddingTop: 15,
    fontSize: 25,
    color: colors.darkgreen,
    textAlign: "left",
    left: 15,
    fontFamily: "Nunito",
  },

  text: {
    flexDirection: "row",
    backgroundColor: colors.lightgreen,
    left: 15,
    marginTop: 20,
    width: "90%",
    fontFamily: "Nunito",
  },

  small_text: {
    flexDirection: "row",
    backgroundColor: colors.lightgreen,
  },

  label: {
    fontSize: 15,
    marginRight: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    width: 200,
  },

  small_input: {
    borderWidth: 1,
    borderColor: "#777",
    width: 80,
  },
});

export default Settings;
