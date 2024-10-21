import { useEffect, useState } from 'react';
import { post } from '../api/products';
import { useStorage } from './useStorage';
import { Product } from '../types/index';

export default function useRegisterProduct() {
    const [product, setProduct] = useState({})
    const [newProducts, setNewProducts] = useState([])
    const { storeData, getData, newItemsDataKey } = useStorage()

    useEffect(() => {
        updateData()
        console.log(newProducts)
    }, [])

    async function updateData() {
        await getData(newItemsDataKey, (data, err) => {
            if (!err) {
                if (data) {
                    console.log(data)
                    const productData = JSON.parse(data)
                   setNewProducts([...productData])
                }
            } else {
                console.error(err)
            }
        })
    }

    async function postNewProduct() {
      

        console.log('POST PRODUCT', product)
        post('/products', product, (resp, err) => {
            storeData(JSON.stringify([...newProducts, [{...product, resp}]]), newItemsDataKey, (res, err) => {
                if (!err) {
                    console.log('RESPONSE TO SAVE', res)
                }
            })
        })
    }

    return (
        {
            product,
            setProduct,
            postNewProduct
        }
    )
}
