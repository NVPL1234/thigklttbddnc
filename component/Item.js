import { useContext } from 'react'
import { StyleSheet, Text, View, Button, Image, Alert, TouchableOpacity } from 'react-native';
import { MyData } from '../Context'
import { NavigationContext } from '../Screen1';
import axios from 'axios';

export default function Item({ item }) {

    const { products, dispatch } = useContext(MyData)
    const {navigation} = useContext(NavigationContext)

    const itemOnPress = () => {
        const productsNew = products.filter((product) => item.id === product.id)
        console.log(productsNew);
        navigation.navigate('Screen2', {productsNew})
    }

console.log(item.url);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={itemOnPress}>
                <Image source={{ uri: item.url }} style={{ width: 74, height: 74 }} />
                <Text style={{ width: '25%', textAlign: 'center', marginRight: '25%', paddingTop: '10%' }}>{item.name}</Text>
                <Text style={{ width: '25%', textAlign: 'center', marginRight: '25%', paddingTop: '10%' }}>{item.price}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: '1%'
    },
});
