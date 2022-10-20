import { useState, useContext } from 'react';
import { StyleSheet, View, TextInput, Button, Image, TouchableOpacity,Text } from 'react-native';
import { MyData } from '../Context';
import axios from 'axios'

export default function Search() {

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', marginBottom: '1%'}}>
                <Image source={require('../assets/v.png')} style={{marginRight: '35%', height: 40, width: 40}}></Image>
                <Text style={{textAlign:'center', marginRight: '30%', fontSize: 16, fontWeight: 'bold', paddingTop: '2%'}}>Home</Text>
                <Image source={require('../assets/dn.png')}></Image>
            </View>
            <View>
                <Text style={{fontSize: 16, marginBottom: '1%'}}>Find Best Burger in Your City</Text>
                <View style={{flexDirection: 'row', marginBottom: '1%'}}>
                    <TextInput placeholder='Search' style={{marginRight: '35%', borderTopWidth: 1, borderBottomWidth: 1, borderRightWidth: 1, borderLeftWidth: 1, borderRadius: 10, width: '50%'}}></TextInput>
                    <TouchableOpacity>
                        <Image source={require('../assets/s.png')}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize: 16}}>Near you now</Text>
            </View>           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
});