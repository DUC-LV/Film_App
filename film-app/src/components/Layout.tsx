import React from "react";
import Header from "./Header"
import Footer from "./Footer";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
export default Layout;