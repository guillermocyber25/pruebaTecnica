import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const OrderPicker = ({setOrderBy, orderPickerValue, setOrderPickerValue }) => {
    return (
        <View style={styles.pickerContainer}>
            <Picker
                selectedValue={orderPickerValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => {
                    setOrderBy(itemValue)
                    setOrderPickerValue(itemValue)
                }}
            >
                <Picker.Item label="ASC" value="asc" />
                <Picker.Item label="DESC" value="desc" />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'flex-end', 
    },
    pickerContainer: {
        position: 'absolute',
        bottom: 5,
        right: 10, 
        width: 100, 
        backgroundColor: '#fff', 
        borderRadius: 10, 
        elevation: 5,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    picker: {
        height: 50,
        width: 200,
    },
});