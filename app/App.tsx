//import { StatusBar } from "expo-status-bar";
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import EStyleSheet from "react-native-extended-stylesheet";
import { initializeApp } from "firebase/app";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ6qNAFNSvyFyImdNv2fcwTMI7YO4kZ3k",
  authDomain: "thegivingtree-fa759.firebaseapp.com",
  databaseURL: "https://thegivingtree-fa759-default-rtdb.firebaseio.com",
  projectId: "thegivingtree-fa759",
  storageBucket: "thegivingtree-fa759.appspot.com",
  messagingSenderId: "158149705053",
  appId: "1:158149705053:web:a64a4f84abf1712badbcb4",
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const db = getFirestore(app);
//const db = getDatabase(app);

//export { db };

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   Nunito: require('./assets/fonts/Nunito-Black.ttf'),
  //   'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  // });
  // if (!fontsLoaded) return <AppLoading />;
  // /* ^Don't mind/edit the code above, it's there to load the font for you! */
  // StatusBar.setBarStyle('dark-content');


  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  EStyleSheet.build();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
