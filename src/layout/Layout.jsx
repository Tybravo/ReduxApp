import { Outlet } from "react-router-dom";
import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../styles/layout.module.css";
import Sidebar from "../components/SideBar";

const Layout = () => {
    return(
        <>
        <Header/>
        <div className={style.outLetContainer}>
            <Sidebar/>
            <Outlet/>
        </div>
        <Footer/>
        
        </>
    )
}

export default Layout