import React from 'react';
import {navProductsItemsArray} from "../../utils/constants";
import {NavLink, Outlet} from "react-router-dom";

const Products = () =>
{
    return (
        <div>
            <nav>
                <ul className={'navigator-list navigator-sublist'}>
                    {navProductsItemsArray.map(item => <li className={'navigator-item'} key={item.route}>
                        <NavLink to={item.route}>{item.title}</NavLink>
                    </li>)}
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Products;