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
} from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import SearchBar from "../components/SearchBar";
import organizations from "../data/organizations.json";
import OrgsButton from "../components/OrgsButton";
import OrgDetails from "./OrgDetails";

export default function TabTwoScreen() {
  const renderItem = (item: {
    id: number;
    name: string;
    description: string;
    logo: string;
  }) => <OrgsButton organization={item} />;

  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={OrganizationsFor}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="OrgDetails"
        component={OrgDetails}
        options={{
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "black",
        }}
      />
    </HomeStack.Navigator>
  );

  function OrganizationsFor() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.upper}>
            <Text style={styles.title}>Organizations for Animal Rights</Text>
            <Text style={styles.description}>
              Help aid organizations fighting for animals to be free of
              involvement and suffering in medical research, hunting, and other
              industries that benefit humans.
            </Text>
          </View>
          <View style={styles.search_sort}>
            <View style={styles.search_bar}>
              <SearchBar />
            </View>
            {/* <div style={styles.sort_button}>
          <Dropdown filters={filters}/>
        </div> */}
          </View>
          <FlatList
            data={organizations} // the array of data that the FlatList displays
            renderItem={({ item }) => renderItem(item)} // function that renders each item
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </SafeAreaView>
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

  // upper region (title and description)
  upper: {
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    //fontFamily: 'Nunito-Black'
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
    left: 40,
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

  aspa: {
    top: 10,
    left: 5,
    paddingRight: 5,
    height: 45,
    width: 60,
    resizeMode: "contain",
  },
});

// Previous Drafts

// <View style={styles.lower}>
//         <Pressable style={styles.org_button}>
//         <Image style={styles.logo} source={require("../assets/images/unnamed.jpeg")}/>
//           <View style={styles.org_title_des}>
//           <Text style={styles.org_title}>
//             Animal Ethics
//           </Text>
//           <Text style={styles.org_description}>
//             "Our vision is a world where all sentient beings are given moral consideration."
//           </Text>
//           </View>
//         </Pressable>
//       </View>
//       <View style={styles.lower}>
//         <Pressable style={styles.org_button}>
//         <Image style={styles.aspa} source={require("../assets/images/ASPCA-logo-1024x276.png")}/>
//         <View style={styles.org_title_des}>
//           <Text style={styles.org_title}>
//             ASPCA
//           </Text>
//           <Text style={styles.org_description}>
//             "We are their voice"
//           </Text>
//           </View>
//         </Pressable>
//       </View>
//       <View style={styles.lower}>
//         <Pressable style={styles.org_button}>
//         <Image style={styles.logo} source={require("../assets/images/logo-header-mobile.png")}/>
//         <View style={styles.org_title_des}>
//           <Text style={styles.org_title}>
//             In Defense of Animals
//           </Text>
//           <Text style={styles.org_description}>
//             "Working to protect the rights, welfare, and habitats of animals."
//           </Text>
//           </View>
//         </Pressable>
//       </View>
//       <View style={styles.lower}>
//         <Pressable style={styles.org_button}>
//         <Image style={styles.logo} source={require("../assets/images/oceanAllianceLogo.png")}/>
//         <View style={styles.org_title_des}>
//           <Text style={styles.org_title}>
//             Ocean Alliance
//           </Text>
//           <Text style={styles.org_description}>
//             "Healthy Whales, Healthy Oceans, Healthy Humans."
//           </Text>
//           </View>
//         </Pressable>
//       </View>
