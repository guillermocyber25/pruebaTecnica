import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStorage = () => {
    const itemsDataKey = 'itemsDataKey'
    const sortDataKey = 'sortDataKey'
    const newItemsDataKey = 'newItemsDataKey'
    
    async function storeData(data, key, callback) {
        try {
            const dataString = JSON.stringify(data)
            await AsyncStorage.setItem(key, dataString, () => callback(dataString));
        } catch (error) {
            // saving error
            callback(null, error)
        }
    };

    async function getData(key, callback) {
        try {
            let dataString = await AsyncStorage.getItem(key)
            if (dataString) {
                callback(JSON.parse(dataString))
            } else {
                callback(null, null)
            }
        } catch (error) {
            // error reading value
            callback(null, error)
        }
    }

    return ({
        itemsDataKey,
        sortDataKey,
        storeData,
        getData,
        newItemsDataKey
    })
}