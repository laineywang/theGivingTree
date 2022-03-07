import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
        <View>
          <TextInput
            placeholder="Search Name"
            onChangeText={(input) => {
              this.searchName(input);
            }}
          />
        </View>
        <FlatList
          style={styles.list}
          data={this.state.organizations} // the array of data that the FlatList displays
          renderItem={({ item }) => this.renderItem(item)} // function that renders each item
          keyExtractor={(item) => item.id}
        />
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
    left: 20,
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
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 2 },
    borderRadius: 20,
    bottom: 10,
    justifyContent: "center",
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

  aspa: {
    top: 10,
    left: 5,
    paddingRight: 5,
    height: 45,
    width: 60,
    resizeMode: "contain",
  },
});

//  <View style={styles.upper}>
//         <Text style={styles.title}>Organizations for Animal Rights</Text>
//         <Text style={styles.description}>
//           Help aid organizations fighting for animals to be free of involvement
//           and suffering in medical research, hunting, and other industries that
//           benefit humans.
//         </Text>
//       </View>
//       <View style={styles.search_sort}>
//         <View style={styles.search_bar}>
//          <SearchBar/>
//         </View>
//         {/* <div style={styles.sort_button}>
//           <Dropdown filters={filters}/>
//         </div> */}
//       </View>

export default OrganizationsFor;
