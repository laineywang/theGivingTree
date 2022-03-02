import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Text style={styles.title}>Organizations for Animal Rights</Text>
        <Text style={styles.description}>
          Help aid organizations fighting for animals to be free of involvement and suffering in medical research, hunting, and other industries that benefit humans. 
        </Text>
      </View>
    </View>
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
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
  },

  description: {
    fontSize: 10,
    color: 'black',
  },

  // search bar and sort function
  search_sort: {

  },

  search_bar: {

  }, 

  search_text: {

  },

  sort_button: {

  }, 

  sort_text: {

  }, 

  // lower region (orgs)
  lower: {

  },

  org_button: {
    backgroundColor: 'white',
    shadowColor: 'black',
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
