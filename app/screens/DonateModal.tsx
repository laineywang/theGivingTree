import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Image, TextInput } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import AmountBtn from "../components/DonationModal/AmountBtn";
import LargeActionButton from "../components/LargeActionButton";
import React, { Component } from "react";
import Colors from "../Themes/Colors";

class DonateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donate: false,
      donateAmt: 0,
      customAmt: "",
      donateBtnState: [false, false, false, false, false, false],
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress(amount, index) {
    let newState = [false, false, false, false, false, false];
    if (!this.state.donateBtnState[index]) {
      newState[index] = true;
    } else {
      amount = 0;
    }

    this.setState({ donateAmt: amount, donateBtnState: newState });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.amountContainer}>
          <View style={styles.rowContainer}>
            <AmountBtn
              label={"$10"}
              onPress={() => this.onPress(5, 0)}
              active={this.state.donateBtnState[0]}
            />
            <AmountBtn
              label={"$25"}
              onPress={() => this.onPress(10, 1)}
              active={this.state.donateBtnState[1]}
            />
            <AmountBtn
              label={"$50"}
              onPress={() => this.onPress(25, 2)}
              active={this.state.donateBtnState[2]}
            />
          </View>
          <View style={styles.rowContainer}>
            <AmountBtn
              label={"$100"}
              onPress={() => this.onPress(100, 3)}
              active={this.state.donateBtnState[3]}
            />
            <AmountBtn
              label={"$250"}
              onPress={() => this.onPress(250, 4)}
              active={this.state.donateBtnState[4]}
            />
            <AmountBtn
              label={"$500"}
              onPress={() => this.onPress(1000, 5)}
              active={this.state.donateBtnState[5]}
            />
          </View>

          <Image
            style={styles.orBar}
            source={require("../assets/images/or-bar.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="$20.00"
            keyboardType="numeric"
            onChangeText={(customAmt) => this.setState({ customAmt })}
            value={this.state.customAmt}
          />
        </View>

        <Text style={styles.selectText}> Recurring Payment</Text>

        {/* <Image
          style={styles.bar}
          source={require("../assets/images/divider-bar.png")}
        /> */}
        <View>
          <View></View>
        </View>
        <View style={styles.actionContainer}>
          <LargeActionButton label={"DONATE"} onPress={this.onPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { height: "100%" },

  amountContainer: { marginTop: 100 },

  selectText: {
    marginTop: 75,
    fontSize: 30,
    textAlign: "center",
    margin: 30,
    color: "black",
    fontWeight: "bold",
  },

  rowContainer: {
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },

  orBar: {
    width: "70%",
    margin: 0,
    alignSelf: "center",
    resizeMode: "contain",
    height: 50,
  },

  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginHorizontal: "15%",
    marginTop: 20,
  },

  bar: {
    width: "100%",
    margin: 50,
    alignSelf: "center",
    resizeMode: "contain",
    height: 50,
  },

  actionContainer: {
    marginTop: 100,
    width: "70%",
    alignSelf: "center",
  },
});

export default DonateModal;
