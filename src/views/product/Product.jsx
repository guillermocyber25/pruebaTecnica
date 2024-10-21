import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

const ProductScreen = ({ navigation, route }) => {
    const { id, title, price, category, description, image } = route.params.params;
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Image source={{ uri: image }} style={styles.image} />
                
                <View style={styles.tableRow}>
                    <Text style={styles.tableLabel}>Title:</Text>
                    <Text style={styles.tableValue}>{title}</Text>
                </View>
                
                <View style={styles.tableRow}>
                    <Text style={styles.tableLabel}>Description:</Text>
                    <Text style={styles.tableValue} numberOfLines={10} ellipsizeMode="tail">
                        {description}
                    </Text>
                </View>
                
                <View style={styles.tableRow}>
                    <Text style={styles.tableLabel}>Category:</Text>
                    <Text style={styles.tableValue} numberOfLines={2} ellipsizeMode="tail">
                        {category}
                    </Text>
                </View>
                
                <View style={styles.tableRow}>
                    <Text style={styles.tableLabel}>Price:</Text>
                    <Text style={styles.price}>${price}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        margin: 10
    },
    scrollContent: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingBottom: 8,
    },
    tableLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        width: '30%',
    },
    tableValue: {
        fontSize: 18,
        color: '#666',
        width: '65%',
        flexWrap: 'wrap',
        textAlign: 'left',
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        width: '65%',
        textAlign: 'left',
    },
})

export default ProductScreen;
