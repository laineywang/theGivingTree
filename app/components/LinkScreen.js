import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { WebView } from "react-native-webview";

export default function LinkScreen({navigation, route}) {  
    const params = route.params;
    console.log(params.url);
    return (
      <WebView
          source={{uri: params.url}}/>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
});

/*
export default function urlButton({ url }) {
    console.log(url);

    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [url]);
  
    return <Button title={"https://whale.org"} onPress={handlePress} style={styles.button} />
  }

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
      backgroundColor: colors.lightblue,
      width: 100,
      padding: 10,
  }
});
*/