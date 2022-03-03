import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, Image } from 'react-native';
import Colors from '../Themes/colors';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function OrgInfo({navigation, route, category, org_name, org_logo, org_site, org_info_text}) {
const params = route.params;

return (
    <View style={styles.screen}>
        <Text style={styles.category_text}>{category}</Text>
        <View style={styles.box}>
            <View style={styles.title_and_logo_section}>
                <Text style={styles.title}>{org_name}</Text>
                <Image style={styles.logo} source={require('../assets/images/oceanAllianceLogo.png')}></Image>
            </View>
            <View style={styles.link_section}>
                <View style={styles.link}></View>
            </View>
            <View style={styles.description_box}>
                <Text style={styles.description_text}>{org_info_text}</Text>
            </View>
            <View style={styles.confirm_section}>
            <Button 
                title='CONFIRM'
                onPress={() => navigation.navigate('Donations', {textData: org_name})}
                color={Colors.darkgreen} />
            </View>
        </View>
    </View>
    
);
}

const styles = StyleSheet.create({
screen :{
    backgroundColor : Colors.lightgreen,
    width : '100%',
    justifyContent: 'center',
    alignItems: 'center',
},
category_text: {
    fontSize: 20,
    paddingLeft: '10%',
    textAlign: 'left',
},
box: {
    maxHeight: '75%',
    backgroundColor: Colors.background,
    justifyContent: 'flex-start',
},
title_and_logo_section: {
    flex: 1,
    justifyContent: 'space-between',
    padding: '5%',
},
title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
},
logo: {
    resizeMode: 'contain',
    maxHeight: '80%',
},
link_section: {
    flex: 0.5,
    alignSelf: 'center',
    flexDirection: 'row',
    padding: '5%',
},
link: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.lightblue,
    borderRadius: 15,
    maxWidth: '20%'
},
description_box: {
    flex: 2,
    padding: '5%',
    justifyContent: 'flex-start'
},
description_text: {
    textAlign: 'left',
    fontSize: 25,
},
confirm_section: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: '5%'
}

});
