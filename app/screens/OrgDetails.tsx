import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function OrgDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>I will be an org details page</Text>
      <Text style={styles.gt_description}>
        Keep your tree growing with donations!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bbd7f0",
  },
  welcome: {
    fontSize: 50,
    fontWeight: "bold",
  },
  gt_description: {
    fontSize: 20,
    fontStyle: "italic",
  },
});
