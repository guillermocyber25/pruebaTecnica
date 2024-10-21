import { useState, useEffect, useMemo } from "react"
import { get } from "../api/products"
import { useStorage } from "./useStorage"
import { Product } from "../types";


export const useProduct = () => {
  const { storeData, getData, itemsDataKey, sortDataKey } = useStorage()
  const [items, setItem] = useState<Product[]>([])
  const [orderBy, setOrderBy] = useState('')
  const [orderPickerValue, setOrderPickerValue] = useState('')
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState<Product[]>()
  const [chargeStatus, setChargeStatus] = useState('IDLE')

  useEffect(() => {
    setSearchText('')
    setFilteredData([])
    getItems()
  },[orderBy])

  useMemo(() => {
    const filtered = items.filter((item : Product) => 
      item.title.toLowerCase().includes(searchText.toLowerCase())
    )
    setFilteredData([...filtered])
  }, [searchText])
  
  async function getItems() {
    setChargeStatus('FETCHING')
    
    var order = ''

    await getData(sortDataKey, (data, err) => {
      if (!err) {
        if (data) {
          order = data
          
          setOrderPickerValue(data)
        }
      } else {
       
      }
    })

    get((order !== '' ? `/products?sort=${order}` : '/products'), (res, err) => {
      if (!err) { 
        const items = itemParser(res)
        
        if (items) {
          setItem([...items])
          setChargeStatus('SUCCESS')
          storeData(JSON.stringify(items), itemsDataKey, (res, err) => {
            if (!err) {

            }
          })
        } 
      }
    })
  }

  function orderItems(sort = '') {
    storeData(sort, sortDataKey, (res, err) => {
      if (!err) {
        setOrderBy(sort)
      }else{
       
      }
    })
  }

  function itemParser(payload) {
    let products = []

    if (payload) {
      for (let item of payload) {
        products.push({
          id: item['id'],
          title: item['title'],
          price: item['price'],
          category: item['category'],
          description: item['description'],
          image: item['image'],
        })
      }
    }

    return products
  }

  function searchEngine(text : string) {
      setSearchText(text)
  }

  return {
    getItems,
    items,
    orderItems,
    orderBy,
    orderPickerValue,
    setOrderPickerValue,
    searchEngine,
    searchText,
    filteredData,
    chargeStatus,
  }
}