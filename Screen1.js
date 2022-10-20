import React, { useContext, createContext, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import Search from './component/Search';
import ListProduct from './component/ListProduct';
import Context from './Context';
import { MyData } from './Context';
import axios from 'axios'

export const NavigationContext = createContext()

function Screen1() {

    const { products, dispatch } = useContext(MyData)

    useEffect(() => {

        axios.get('https://6347925e0484786c6e836f8d.mockapi.io/api/products')
            .then(function (data) {
                console.log(data.data);
                dispatch({ type: 'GET', products: data.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <View style={styles.container}>
            <Search></Search>
            <ListProduct></ListProduct>
        </View>
    )
}

export default function CreateScreen1({ navigation }) {
    return (
        <Context>
            <NavigationContext.Provider value={{ navigation }}>
                <Screen1 />
            </NavigationContext.Provider>
        </Context>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '1%',
        padding: '1%'
    },
});