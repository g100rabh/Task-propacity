import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";


const RootLayout = (props) => {
    return (
        <Fragment>
            <Header />
            <SideBar />
            <Outlet />
        </Fragment>
    )
}

export default RootLayout;

