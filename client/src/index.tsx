import { createContext } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore';
import ProductStore from './store/ProductStore';

export const Context = createContext({} as any)
console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
    <Context.Provider value = {{
      user: new UserStore(),
      product: new ProductStore()
      }}>
      <App />
    </Context.Provider>,
  document.getElementById('root'),
);
reportWebVitals();
