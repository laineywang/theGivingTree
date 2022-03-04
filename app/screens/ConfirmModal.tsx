import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Image, TextInput } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import AmountBtn from "../components/DonationModal/AmountBtn";
import RecurringBtn from "../components/DonationModal/RecurringBtn";
import LargeActionButton from "../components/LargeActionButton";
import React, { Component } from "react";
import Colors from "../Themes/Colors";

import { useNavigation } from "@react-navigation/native";

class ConfirmModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donateAmt: 0,
      recurring: "",
      customAmt: "",
      donateBtnState: [false, false, false, false, false, false],
      recBtnState: [false, false, false, false],
    };
    this.onPress = this.onPress.bind(this);
  }

  onDonatePress() {
    const navigation = useNavigation();
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

  onRecPress(recurr, index) {
    let newState = [false, false, false, false];
    if (!this.state.recBtnState[index]) {
      newState[index] = true;
    } else {
      recurr = "";
    }

    this.setState({ recurring: recurr, recBtnState: newState });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.amountContainer}>
          <Text style={styles.selectText}>pie</Text>
          <View style={styles.rowContainer}>
            <AmountBtn
              label={"$20"}
              onPress={() => this.onPress(10, 0)}
              active={this.state.donateBtnState[0]}
            />
            <AmountBtn
              label={"$25"}
              onPress={() => this.onPress(25, 1)}
              active={this.state.donateBtnState[1]}
            />
            <AmountBtn
              label={"$50"}
              onPress={() => this.onPress(50, 2)}
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
              onPress={() => this.onPress(500, 5)}
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
        {/* <Image
          style={styles.bar}
          source={require("../assets/images/divider-bar.png")}
        /> */}

        <Text style={styles.selectText}> Recurring Payment</Text>
        <View style={styles.rowContainer}>
          <RecurringBtn
            label={"One Time"}
            onPress={() => this.onRecPress("One Time", 0)}
            active={this.state.recBtnState[0]}
          />
          <RecurringBtn
            label={"Weekly"}
            onPress={() => this.onRecPress("Weekly", 1)}
            active={this.state.recBtnState[1]}
          />
        </View>
        <View style={styles.rowContainer}>
          <RecurringBtn
            label={"Monthly"}
            onPress={() => this.onRecPress("Monthly", 2)}
            active={this.state.recBtnState[2]}
          />
          <RecurringBtn
            label={"Annually"}
            onPress={() => this.onRecPress("Annually", 3)}
            active={this.state.recBtnState[3]}
          />
        </View>

        <View>
          <View></View>
        </View>
        <View style={styles.actionContainer}>
          <LargeActionButton
            label={"DONATE"}
            onPress={this.onPress}
            active={
              (this.state.donateAmt > 0 || this.state.customAmt != "") &&
              this.state.recurring != ""
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { height: "100%" },

  amountContainer: {},

  selectText: {
    marginTop: 60,
    fontSize: 26,
    marginLeft: "12%",
    textAlign: "left",
    marginBottom: 15,
    color: "black",
    fontWeight: "bold",
  },

  rowContainer: {
    paddingLeft: "15%",
    paddingRight: "15%",
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

export default ConfirmModal;
