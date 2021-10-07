import React from 'react';
import { useLocation } from 'react-router-dom';
import { BASKET_ROUTE } from 'src/utils/consts';

const Basket = () => {
    const location = useLocation()
    location.pathname = BASKET_ROUTE
    return (
        <div>
            BASKET
        </div>
    );
};

export default Basket;