import React, { Component, useState, useEffect } from "react";
import {
  OptionType,
  Select,
  State,
} from "@mobile-reality/react-native-select-pro";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
  FlatList,
  StatusBar,
  TextInput,
} from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import SearchBar from "../components/SearchBar";
import organizations from "../data/organizations.js";
import OrgsButton from "../components/OrgsButton";
import OrgDetails from "./OrgDetails";
import DonateModal from "./DonateModal";
import ConfirmModal from "./ConfirmModal";
import ThankYou from "./ThankYou";
import colors from "../Themes/Colors";
//import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

class OrganizationsFor extends Component {
  constructor(props) {
    super(props);

    let labels = [
      { value: "0", label: "Alphabetical" },
      {
        value: "1",
        label: "Most in Need",
      },
    ];

    this.state = {
      organizations: organizations,
      labels: labels,
    };
  }

  renderItem(item) {
    return (
      <View style={styles.button}>
        <OrgsButton
          name={item.name}
          id={item.id}
          description={item.description}
          logo={item.logo}
          info={item.info}
          url={item.url}
        />
      </View>
    );
  }

  // search name only searches by org name rn. have to add more logic to search by description or anything
  searchName(input) {
    let searchData = organizations.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });

    this.setState({
      organizations: searchData,
    });
  }

  _selectHelper = (option) => () => {
    const [selected, setSelected] = useState<OptionType | null>(null);
    setSelected(option);

    return;
  };

  onSelect(option) {
    //this._selectHelper(option);
    let labels = [
      { value: "0", label: "Alphabetical" },
      {
        value: "1",
        label: "Most in Need",
      },
    ];

    if (option.label == "Alphabetical") {
      this.setState({
        organizations: organizations,
        labels: labels,
      });
    } else {
      this.setState({
        organizations: organizations.reverse(),
        labels: labels.reverse(),
      });
    }
  }

  render() {
    let labels = [
      { value: "0", label: "Alphabetical" },
      {
        value: "1",
        label: "Most in Need",
      },
    ];

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Organizations for Animal Rights</Text>
        <Text style={styles.description}>
          Help aid organizations fighting for animals to be free of involvement
          and suffering in medical research, hunting, and other industries that
          benefit humans.
        </Text>
        <View>
          <TextInput
            placeholder="Search Organization"
            style={styles.search_bar}
            onChangeText={(input) => {
              this.searchName(input);
            }}
          />
        </View>
        <Select
          placeholderText="Sort"
          clearable={false}
          closeDropdownOnSelect={true}
          selectContainerStyle={styles.selectContainer}
          selectControlStyle={styles.selectControl}
          selectControlButtonsContainerStyle={styles.selectControlContainer}
          optionTextStyle={styles.optionText}
          optionsListStyle={styles.optionList}
          selectControlTextStyle={styles.sortText}
          defaultOption={this.state.labels[0]}
          onSelect={(option) => this.onSelect(option)}
          options={this.state.labels}
        />
        <View>
          {/* <View style={styles.sort_row}> */}
          {/* <Pressable onPress={() => this.onPress()} style={styles.sort_button}>
            <Text style={styles.sort_text}>Sort By</Text>
            <Image
              style={styles.down_arrow}
              source={require("../data/icons/down_arrow.png")}
            />
          </Pressable> */}
        </View>
        <ScrollView>
          <FlatList
            style={styles.list}
            data={this.state.organizations} // the array of data that the FlatList displays
            renderItem={({ item }) => this.renderItem(item)} // function that renders each item
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  button: {
    marginBottom: 20,
    width: "100%",
  },

  // upper region (title and description)
  upper: {
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.darkgreen,
    textAlign: "center",
    fontFamily: "Nunito-Bold",
  },

  list: {
    top: 10,
    left: 15,
  },

  description: {
    fontSize: 13,
    color: "black",
    paddingLeft: 30,
    paddingBottom: 30,
    paddingRight: 30,
    paddingTop: 15,
    fontFamily: "Nunito",
  },

  // search bar and sort function
  search_sort: {},

  search_bar: {
    height: 30,
    width: 324,
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 0.3,
    bottom: 10,
    textAlign: "center",
    marginBottom: 10,
  },

  selectContainer: {
    alignSelf: "flex-start",
    marginLeft: "8%",
    width: "35%",
    color: "gray",
    borderWidth: 0,
    backgroundColor: "white",
    tintColor: "white",
  },

  selectControl: {
    width: "100%",
    color: "gray",
    borderColor: "gray",
    borderRadius: 20,
    borderWidth: 0.3,
  },

  selectControlContainer: { color: colors.gray },

  optionText: {
    color: colors.gray,
  },

  optionList: {
    width: "100%",
    color: "gray",
    borderColor: "gray",
    borderWidth: 0.3,
  },

  sortText: {
    color: colors.gray,
  },
  // sort_row: {
  //   flexDirection: "row",
  //   height: "5%",
  // },
  // sort_button: {
  //   width: "25%",
  //   height: "100%",
  //   marginVertical: 10,
  //   marginRight: "60%",
  //   borderRadius: 20,
  //   borderColor: "gray",
  //   borderWidth: 0.3,
  //   alignItems: "center",
  //   justifyContent: "space-around",
  //   flexDirection: "row",
  // },

  // sort_text: {
  //   fontSize: 15,
  //   color: colors.gray,
  //   marginLeft: 10,
  //   alignSelf: "center",
  // },
  // down_arrow: {
  //   resizeMode: "contain",
  //   height: "50%",
  //   width: "20%",
  //   marginRight: 5,
  // },

  // lower region (orgs)
  lower: {
    top: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
});

export default OrganizationsFor;
