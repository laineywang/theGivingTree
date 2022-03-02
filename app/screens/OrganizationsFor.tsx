import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Organizations for Animal Rights</Text>
      <Text style={styles.description}>
        Help aid organizations fighting for animals to be free of involvement and suffering in medical research, hunting, and other industries that benefit humans. 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF9F5'
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
});
