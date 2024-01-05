import React from 'react';
import {navItemsArray} from "../../utils/constants";
import {NavLink, Outlet} from "react-router-dom";

const Layout = () =>
{
    return (
        <div>
            <nav>
                <ul className={'navigator-list'}>
                    {navItemsArray.map(item => <li className={'navigator-item'} key={item.route}>
                        <NavLink to={item.route}>{item.title}</NavLink>
                    </li>)}
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Layout;