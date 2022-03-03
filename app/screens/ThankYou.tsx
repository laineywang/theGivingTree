import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, Image } from 'react-native';
import colors from '../Themes/Colors';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function ThankYou(){
    const navigation = useNavigation();

    <View style={styles.screen}>
        <Text style={styles.thanks_text}>Thank you for your donation!</Text>
        <Button 
            title="See your GivingTree's progress!"
            onPress={() => navigation.navigate('Root')}/>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        justifyContent:'space-between',
    },
    thanks_text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.darkgreen,
        padding: 30,
    },
    go_home: {
        borderRadius: 15,
        maxWidth: '70%',
        backgroundColor: colors.lightblue
    }
});