import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Basket from './pages/Basket'
import Filtering from './pages/Filtering'
import ProductsPage from './pages/ProductsPage'
import Shop from './pages/Shop'
import {ADMIN_ROUTE, BASKET_ROUTE, FILTER_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from './utils/consts'

export const authRoutes = [
    
    //{
    //    path: ADMIN_ROUTE,
    //    Component: Admin
    //},
    //{
    //    path: BASKET_ROUTE,
    //    Component: Basket
    //},
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductsPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: FILTER_ROUTE + '/:id',
        Component: Filtering
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]