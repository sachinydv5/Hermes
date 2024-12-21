import React from 'react'
import Footer from "../common/Footer";
import Header from "../common/Header";
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../utils/AppRoutes';
import NavBar from '../common/NavBar';
export function MainLayout({ children }: any) {
    const location = useLocation();

    const noFooterPaths = [AppRoutes.USERPROFILE, AppRoutes.DASHBOARD,AppRoutes.WISHLIST,AppRoutes.TRACKORDER];
    const noNavBar = ["/",AppRoutes.HOME];

    const hideNavBar = noNavBar.some((path) => location.pathname.startsWith(path));
    const hideFooter = noFooterPaths.some((path) => location.pathname.startsWith(path));
    
    return (<>
    <div>
    <header>
            <Header />
        </header>
        {!hideNavBar && <NavBar/>}
        <div className="">
            {children}
        </div>
        <footer className="mt-10">
        {!hideFooter && <Footer />}
        </footer>
    </div>   
    </>)
}

export default MainLayout;