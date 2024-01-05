import React, {SyntheticEvent, useEffect, useState} from 'react';
import {NavItem} from "../../utils/types";
import {AppBar, Box, Tab, Tabs} from "@mui/material";
import {Link, Outlet, useNavigate} from "react-router-dom";
interface Props
{
    routes: NavItem[]
    subnav?: boolean
}
const NavigatorDesktop = ({routes, subnav}: Props) =>
{
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    useEffect(() =>
    {
        if (!subnav)
        {
            navigate(routes[0].route);
            setValue(0);
        }
    }, []);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{marginTop: '10vh'}}>
            <AppBar sx={{backgroundColor: 'lightgrey'}}>
                <Tabs value={(value > routes.length) ? 0 : value} onChange={handleChange}>
                    {routes.map((item, index) => <Tab key={index} component={Link} to={item.route}
                                                      label={item.title}/>)}
                </Tabs>
            </AppBar>
            <Outlet/>
        </Box>
    );
};

export default NavigatorDesktop;