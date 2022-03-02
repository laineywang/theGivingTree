import { StyleSheet, Image, SafeAreaView, Pressable, ScrollView } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import TabOneScreen from './TabOneScreen';
import Dropdown from '../components/Dropdown';
import filters from "../data/filters.json"

export default function TabTwoScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.upper}>
        <Text style={styles.title}>Organizations for Animal Rights</Text>
        <Text style={styles.description}>
          Help aid organizations fighting for animals to be free of involvement and suffering in medical research, hunting, and other industries that benefit humans. 
        </Text>
      </View>
      <View style={styles.search_sort}>
        <View style={styles.search_bar}>
          <SearchBar/>
        </View>
        {/* <div style={styles.sort_button}>
          <Dropdown filters={filters}/>
        </div> */}
      </View>
      <View style={styles.lower}>
        <Pressable style={styles.org_button}> 
          <Text style={styles.org_title}>
            Animal Ethics
          </Text>
          <Text style={styles.org_description}>
            "Our vision is a world where all sentient beings are given moral consideration."
          </Text>
        </Pressable>
      </View>
      <View style={styles.lower}>
        <Pressable style={styles.org_button}> 
          <Text style={styles.org_title}>
            ASPCA
          </Text>
          <Text style={styles.org_description}>
            "We are their voice."
          </Text>
        </Pressable>
      </View>
      <View style={styles.lower}>
        <Pressable style={styles.org_button}> 
          <Text style={styles.org_title}>
            In Defense of Animals
          </Text>
          <Text style={styles.org_description}>
            "Working to protect the rights, welfare, and habitats or animals."
          </Text>
        </Pressable>
      </View>
      <View style={styles.lower}>
        <Pressable style={styles.org_button}> 
          <Text style={styles.org_title}>
            Ocean Alliance
          </Text>
          <Text style={styles.org_description}>
            "Healthy Whales, Healthy Oceans, Healthy Humans"
          </Text>
        </Pressable>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  // upper region (title and description)
  upper: {
    justifyContent: 'flex-start',
  }, 

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    //fontFamily: 'Nunito-Black'
  },

  description: {
    fontSize: 13,
    color: 'black',
    paddingLeft: 30,
    paddingBottom: 30,
    paddingRight: 30,
    paddingTop: 15,
  },

  // search bar and sort function
  search_sort: {

  },

  search_bar: {
    height: 30,
    width: 300,
    shadowColor: 'gray', 
    shadowOpacity: 0.4, 
    shadowRadius: 5, 
    shadowOffset: {width: -1, height: 2},
    borderRadius: 20,
    bottom: 10, 
    left: 40,
    justifyContent: 'center',
  },

  sort_button: {
    width: 200, 
  }, 

  sort_text: {

  }, 

  // lower region (orgs)
  lower: {
      top: 20, 
      paddingBottom:20, 
      alignItems: 'center',
  },

  org_button: {
    backgroundColor: 'white',
    shadowColor: 'gray', 
    shadowOpacity: 0.4, 
    shadowRadius: 5, 
    shadowOffset: {width: -1, height: 2},
    borderRadius: 16, 
    height: 100, 
    width: 320, 
  },

  org_title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  }, 
  
  org_description: {
    fontSize: 10,
    color: 'gray',
  },
});
