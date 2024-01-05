import {NavItem} from "./types";

export const navItemsArray: NavItem[] =
    [
        {route: '/', title: 'Home', forAll: true},
        {route: 'customers', title: 'Customers', admin: true},
        {route: 'products', title: 'Products', forAll: true},
        {route: 'orders', title: 'Orders', authenticated: true},
        {route: 'shoppingcart', title: 'Shopping cart', authenticated: true},
        {route: 'login', title: 'Login', noAuthenticated: true},
        {route: 'logout', title: 'Logout', authenticated: true},
        {route: 'signup', title: 'Sign up', noAuthenticated: true}
    ];
export const navProductsItemsArray: NavItem[] =
    [
        {route: 'dairy', title: 'Dairy products'},
        {route: 'bread', title: 'Bread products'},
        {route: 'back', title: 'Back'}
    ];

export const AUTH_USER = 'auth-user';
export const PRODUCTS_COLLECTION = 'products';
export const CATEGORIES_COLLECTION = 'categories';