import { StyleSheet, Image, SafeAreaView, Pressable } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import TabOneScreen from './TabOneScreen';

export default function TabTwoScreen() {

  return (
    <SafeAreaView style={styles.container}>
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
      </View>
      <View style={styles.lower}>
        <Pressable style={styles.org_button}> 
        </Pressable>
        <Pressable style={styles.org_button}> 
        </Pressable>
        <Pressable style={styles.org_button}> 
        </Pressable>
        <Pressable style={styles.org_button}> 
        </Pressable>
      </View>
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
  },

  sort_button: {

  }, 

  sort_text: {

  }, 

  // lower region (orgs)
  lower: {

  },

  org_button: {
    top: 30,
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
    color: 'black',
  },
});
