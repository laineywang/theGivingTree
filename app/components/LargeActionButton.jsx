import { StyleSheet, Pressable, Button, SafeAreaView } from "react-native";
import { Text, View } from "../components/Themed";

const LargeActionButton = ({ label, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed ? { opacity: 0.9 } : {}]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,

    borderRadius: 30,
    elevation: 3,
    backgroundColor: "#185A37", // could not import Colors for the life of me for some reason idk
  },
  text: {
    fontSize: 42,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default LargeActionButton;
