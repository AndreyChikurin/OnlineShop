import {makeAutoObservable} from 'mobx'

 
export default class ProductStore{
    _categories: any
    _products: any
    constructor() {
        this._categories = [ ]
        this._products = [ ]
        makeAutoObservable(this)
    }

    setCategories(categories: any) {
        this._categories = categories
    }
    setProducts(products: any) {
        this._products = products
    }

    get products() {
        return this._products
    }
    get categories() {
        return this._categories
    }
}