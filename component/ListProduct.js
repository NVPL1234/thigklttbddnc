import React, { useContext } from 'react'
import { FlatList } from 'react-native';
import Item from './Item';
import { MyData } from '../Context';

export default function ListProduct() {

    const { products, dispatch } = useContext(MyData)

    const renderItem = ({ item }) => {
        return (
            <Item item={item}></Item>
        )
    }

    return (
        <FlatList data={products} renderItem={renderItem} numColumns={2}></FlatList>
    );
}
