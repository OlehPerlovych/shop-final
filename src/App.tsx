import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {navItemsArray, navProductsItemsArray} from "./utils/constants";
import Home from "./components/pages/Home";
import Customers from "./components/pages/Customers";
import Dairy from "./components/pages/Dairy";
import Bread from "./components/pages/Bread";
import Orders from "./components/pages/Orders";
import ShoppingCart from "./components/pages/ShoppingCart";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import ErrorPage from "./components/pages/ErrorPage";
import NavigatorDesktop from "./components/navigation/NavigatorDesktop";
import {useAppSelector} from "./app/hooks";
import {NavItem} from "./utils/types";
import SignUpForm from "./components/forms/SignUpForm";

function App()
{
    const authUser = useAppSelector(state => state.auth.authUser);
    const getRoutes = (): NavItem[] =>
    {
        const resRoutes = navItemsArray.filter(item => item.forAll || (item.authenticated && authUser) ||
            (item.admin && authUser.includes('admin')) || (item.noAuthenticated && !authUser));
        const logoutRoute = resRoutes.find(item => item.route === 'logout');
        if(logoutRoute)
            logoutRoute.title = `Logout ${authUser}`;
        return resRoutes;
    }

    const [routes, setRoutes] = useState(getRoutes());

    useEffect(() => setRoutes(getRoutes), [authUser]);

    return (
        <Routes>
            <Route path={navItemsArray[0].route} element={<NavigatorDesktop routes={routes}/>}>
                <Route index element={<Home/>}/>
                <Route path={navItemsArray[1].route} element={<Customers/>}/>
                <Route path={navItemsArray[2].route} element={<NavigatorDesktop routes={navProductsItemsArray}
                            subnav/>}>
                    <Route path={navProductsItemsArray[0].route} element={<Dairy/>}/>
                    <Route path={navProductsItemsArray[1].route} element={<Bread/>}/>
                    <Route path={navProductsItemsArray[2].route} element={<NavigatorDesktop routes={routes}/>}/>
                </Route>
                <Route path={navItemsArray[3].route} element={<Orders/>}/>
                <Route path={navItemsArray[4].route} element={<ShoppingCart/>}/>
                <Route path={navItemsArray[5].route} element={<Login/>}/>
                <Route path={navItemsArray[6].route} element={<Logout/>}/>
                <Route path={navItemsArray[7].route} element={<SignUpForm/>}/>
            </Route>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    );
}

export default App;
