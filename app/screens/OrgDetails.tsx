import { StyleSheet } from "react-native";
import * as React from "react";
import LargeActionButton from "../components/LargeActionButton";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View} from "../components/Themed";
import { Button, Image, Pressable} from 'react-native';
import { WebView} from "react-native-webview";
import { RootTabScreenProps } from "../types";
import colors from "../Themes/Colors";
import organizations from "../data/organizations.js";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import LinkScreen from "../components/LinkScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function OrgInfo({route}) {
    const navigation = useNavigation();

    const params = route.params;

    console.log(params.url);

    const url = params.url;

    const HomeStack = createNativeStackNavigator();
    function Home() {
        return (
            <View style={styles.container}>
                <Text style={styles.category_text}>Organizations for Animal Rights</Text>
                <View style={styles.box}>
                    <View style={styles.title_and_logo_section}>
                        <Text style={styles.title}>{params.name}</Text>
                        <Image style={styles.logo} source={params.logo}></Image>
                    </View>
                    <View style={styles.link_section}>
                        <Pressable style={styles.link_button} onPress={() => navigation.navigate("LinkScreen", {url:url})}>
                            <Text style={styles.link_text}>{params.url}</Text>
                        </Pressable>
                    </View>

                    <View style={styles.description_box}>
                        <Text style={styles.description_text}>{params.info}</Text>
                    </View>

                    <View style={styles.confirm_section}>
                    <LargeActionButton
                        label="DONATE"
                        onPress={() =>
                        // navigation.navigate("Modal", {
                        //   name: params.name,
                        // })
                        navigation.navigate("Modal", {
                            screen: "DonateModal",
                            params: { name: params.name },
                        })
                        }
                        active={true}/>
                    </View>
                </View>
            </View>
        );
    }

  return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="LinkScreen"
          component={LinkScreen}
          options={{
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTintColor: "black",
          }}
        />
      </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({
    container :{
        backgroundColor : colors.lightgreen,
        justifyContent: 'center',
        flex: 1,
    },
    category_text: {
        fontSize: 14,
        paddingLeft: '10%',
        color: colors.gray,
        fontWeight: 'bold',
        paddingVertical: 5
    },
    box: {
        backgroundColor: colors.background,
        maxWidth: '80%',
        maxHeight: '80%',
        alignSelf: 'center'
    },
    title_and_logo_section: {
        flex: 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        flexWrap: 'wrap',
        flex: 2,
        paddingLeft: 10
    },
    logo: {
        resizeMode: 'contain',
        height: '100%',
        flex: 1,
        alignSelf: 'center',
    },
    link_section: {
        flex: 0.5,
        alignSelf: 'flex-start',
        padding: '5%',
    },
    description_box: {
        flex: 3,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    description_text: {
        textAlign: 'left',
        fontSize: 17,
        flexWrap: 'wrap',
        padding: 10
    },
    confirm_section: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: '5%'
    },
    link_button: {
        backgroundColor: colors.lightblue,
        height: '100%',
        borderRadius: 30,
        justifyContent: 'center'
    },
    link_text: {
        fontSize: 17,
        flexWrap: 'wrap',
        paddingHorizontal: 20
    }
});
