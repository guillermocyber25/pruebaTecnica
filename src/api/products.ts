import { Product } from '../types/index';

const BASE_PATH_URL = 'https://fakestoreapi.com'

 export function get(path,  callback) {
    xhr(BASE_PATH_URL + path, null, "GET")
        .then((resp) => {
            if (resp.err) {
                callback(resp, resp.err)
            } else {
                callback(resp)
            }
        })
        .catch((err) => {
            console.error(err)
        });
}


export function post(path : string, payload : {} , callback : (resp?: Object, err?: Error) => void ) {
    xhr(BASE_PATH_URL + path, payload, "POST")
        .then((resp) => {
            if (resp.err) {
                callback({}, resp.err)
            } else {
                callback(resp)
            }
        })
        .catch((err) => {
            console.error(err)
        });
}

async function xhr(url, params, verb) {
    let options = Object.assign(
        { method: verb },
        params ? { body: JSON.stringify(params) } : null,
    );
    try {
        let response = await fetch(url, options)

        if (response.ok) {
            let responseJson = await response.json()
            return responseJson
        } else {
            let err = new Error(response.statusText)
          
            throw err
        }
    } catch (error) {
        return { err: error }
    }
}