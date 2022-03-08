import React, { Component, useState, useEffect } from "react";
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

class OrganizationsFor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organizations: organizations,
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
  

  render() {
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
    //fontFamily: 'Nunito-Black'
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
  },

  // search bar and sort function
  search_sort: {},

  search_bar: {
    height: 30,
    width: 300,
    shadowColor: "gray",
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 2 },
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 0.3,
    bottom: 10,
    textAlign: "center",
  },

  sort_button: {
    width: 200,
  },

  sort_text: {},

  // lower region (orgs)
  lower: {
    top: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
});

export default OrganizationsFor;
