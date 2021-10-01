import {$authHost, $host} from './index'

export const createCategory = async (categoty: any) => {
    const {data} = await $host.post('api/cateries', categoty)
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/cateries')
    return data
}

export const createProduct = async (product: any) => {
    const {data} = await $host.post('api/Products', product)
    return data
}

export const fetchProducts = async () => {
    const {data} = await $host.get('api/products')
    return data
}

export const fetchOneDevice = async (id: string) => {
    const {data} = await $host.get('api/products/' + id)
    return data
}