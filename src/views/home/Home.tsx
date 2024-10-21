import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import ProductCard from './components/ProductCard';
import HamburgerMenuHeader from './components/HamburgerMenuHeader';
import { OrderPicker } from './components/OrderPicker';
import { useProduct } from '../../hooks/useProduct';

export default function HomeScreen() {
    const { items, orderItems, orderBy, orderPickerValue, setOrderPickerValue, searchEngine, searchText, filteredData, chargeStatus } = useProduct()

    return (
        <View style={styles.container}>
            <HamburgerMenuHeader
                searchEngine={ searchEngine }
                searchText={ searchText }
            />

            {chargeStatus === 'SUCCESS' ?
                <View>
                    <FlatList
                        data={searchText.length > 0 ? filteredData : items}
                        renderItem={({ item }) =>
                            <ProductCard
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                category={item.category}
                                description={item.description}
                                image={item.image}
                            />}
                        keyExtractor={item => item.id.toString()}
                    />

                </View>

                : <ActivityIndicator />}
            <OrderPicker
                setOrderBy={orderItems}
                orderBy={orderBy}
                orderPickerValue={orderPickerValue}
                setOrderPickerValue={setOrderPickerValue}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});