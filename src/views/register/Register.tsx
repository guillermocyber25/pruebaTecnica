import React, { useEffect } from 'react'
import { Image, View, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomTextInput } from '../../components/CustomTextInput';
import { RoundedButton } from '../../components/RoundedButton'
import styles from './Styles';
import useRegisterProduct from '../../hooks/useRegisterProduct';
import { CommonActions, useNavigation } from '@react-navigation/native'

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const { product, setProduct, postNewProduct } = useRegisterProduct()

  const localProps = {
    id: '',
    title: '',
    price: 0,
    description: '',
    image: '',
    category: ''
  }

  const handleBack = () => {
    navigation.goBack()
  }

  useEffect(()=>{
    setProduct(localProps)
  },[])
  
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
         source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Register</Text>
        <CustomTextInput
          placeholder='Title'
          keyboardType='default'
          property='title'
          onChangeText={ (property , value) => {
              setProduct({...product, [property]: value})
          } }
          value={product.title}
        />
        <CustomTextInput
          placeholder='Price'
          keyboardType='default'
          property='price'
          onChangeText={ (property , value) => {
            setProduct({...product, [property]: value})
        } }
          value={product.price}
        />
        <CustomTextInput
          placeholder='Category'
          keyboardType='default'
          property='category'
          onChangeText={ (property , value) => {
            setProduct({...product, [property]: value})
        } }
          value={product.category}
        />
        <CustomTextInput
          placeholder='Descrtiption'
          keyboardType='default'
          property='description'
          onChangeText={ (property , value) => {
            setProduct({...product, [property]: value})
        } }
          value={product.description}
        />
        <CustomTextInput
          placeholder='Image URL'
          keyboardType='default'
          property='image'
          onChangeText={ (property , value) => {
            setProduct({...product, [property]: value})
        } }
          value={product.image}
        />
        <View style={{ marginTop: 30 }}>
          <RoundedButton text='CONFIRMAR' onPress={() => {
            postNewProduct() 
            handleBack()
          }} />
        </View>
      </View>
    </View>
  );
}