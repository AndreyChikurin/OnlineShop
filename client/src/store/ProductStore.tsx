import {makeAutoObservable} from 'mobx'

 
export default class ProductStore{
    _categories: any
    _products: any
    constructor() {
        this._categories = [
            {id:"1",
            name:"Digital Watches",
            description:"Digital watches are an ideal choice if you want a highly functional timepiece that can be used for sporty activities"},
            {id:"2",
            name:"Quartz Watches",
            description:"Built with quartz battery at the very core, quartz watch movements are one of the most reliable forms of timekeeping"},
            {id:"3",
            name:"Automatic Watches",
            description:"Our self-winding automatic watches are an ideal choice for those who want a watch that's timeless, functional and guarantee that will work for a very long time"}
        ]
        this._products = [
            {id:"1",
            name:"Longines Master Collection",
            price:90.00,
            img:"https://luks33.ru/image/cache/catalog/mens/0/timenn-ru-image-cache-data-Longines-rovno-longines-20master-20goldentimenn-ru-3-990x990-900x900.jpg",
            quantity:10,
            categoryType:{id:"2",
                          name:"Quartz Watches",
                          description:"Built with quartz battery at the very core, quartz watch movements are one of the most reliable forms of timekeeping"}},
            {id:"2",
            name:"Invicta Pro Diver","price":140.00,
            img:"https://cdn2.jomashop.com/media/catalog/product/i/n/invicta-pro-diver-blue-dial-men_s-watch-17056.jpg",
            quantity:10,
            categoryType:{id:"3",
                          name:"Automatic Watches",
                          description:"Our self-winding automatic watches are an ideal choice for those who want a watch that's timeless, functional and guarantee that will work for a very long time"}},{"id":"6823a1f7-731b-4d35-8c3f-7e0abdbf0643","name":"Rolex Daytona","price":10000.00,"img":"https://images.ru.prom.st/876822388_w640_h640_chasy-rolex-cosmograph.jpg","quantity":10,"categoryType":{"id":"c6539d64-9767-45fe-800f-beb81a828467","name":"Automatic Watches","description":"Our self-winding automatic watches are an ideal choice for those who want a watch that's timeless, functional and guarantee that will work for a very long time"}},{"id":"e8006bc5-08f1-4f2b-b837-9019b93e31ac","name":"GA 110 Gold","price":100.00,"img":"https://guide.alibaba.com/image/i4/casio-watches-casio-g-shock-series-of-casual-quartz-male-watch-ga-110gb-896ab-1a/TB1mMwbNXXXXXc6XFXXXXXXXXXX_!!0-item_pic.jpg","quantity":10,"categoryType":{"id":"c3c237d2-6e6f-47bd-9e73-1ae1646ca602","name":"Digital Watches","description":"Digital watches are an ideal choice if you want a highly functional timepiece that can be used for sporty activities"}}
        ]
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