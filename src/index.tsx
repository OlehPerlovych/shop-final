import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './App';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {setProducts} from "./firebase/db-service";

const container = document.getElementById('root')!;
const root = createRoot(container);
setProducts()
    .then(()=> root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    ));

