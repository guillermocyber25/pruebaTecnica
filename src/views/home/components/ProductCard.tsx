import { TouchableOpacity } from "react-native";
import { View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'

export default function ProductCard({ id, title, price, description, category, image }) {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity
                onPress={() => { navigation.navigate('ProductScreen', { params: { id, title, price, category, description, image } }) }}
                style={styles.cardContainer}
            >
                <Image source={{ uri: image }} style={styles.productImage} />
                <Text style={styles.productTitle}>{title}</Text>
                <Text style={styles.productName}>${price}</Text>
                <Text style={styles.productDescription}>{description}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    productImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    productName: {
        fontSize: 16,
        color: '#555',
        marginVertical: 5,
    },
    productDescription: {
        fontSize: 14,
        color: '#777',
    },
})