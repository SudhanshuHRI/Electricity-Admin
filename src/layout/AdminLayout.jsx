import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/sidebar";
import React, { useState } from "react"

const AdminLayout = ({ children }) => {


    return (
        <div>
            <div className="page">
                <div className="page-main">
                    <Header />
                    <div>
                        <Sidebar />
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}


export default AdminLayout;