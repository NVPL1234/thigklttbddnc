import { StyleSheet, View, Image, Text, Button } from 'react-native';

export default function Screen2({ route }) {
    return (
        <View>
            <View style={{ backgroundColor: 'black' }}>
                <Image source={{ uri: route.params.productsNew[0].url }} style={{ width: '50%', height: '50%', marginLeft: '30%', marginBottom: '20%' }}></Image>
            </View>
            <View style={{borderRadius: 10, borderTopWidth: 10}}>
                <View>
                    <Text style={{fontSize: 16}}>Calories: 344 kcal</Text>
                    <Text style={{fontSize: 16}}>Angus bugger topped with lettuce, tomato and Shacksource</Text>
                </View>
                <View>
                    <Text style={{fontSize: 16}}>Quantity</Text>
                    <Button title='-'></Button>
                    <Button title='+'></Button>
                    <Button title='Customize'></Button>
                    <Button title='Add to cart'></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        padding: '1%'
    },
});