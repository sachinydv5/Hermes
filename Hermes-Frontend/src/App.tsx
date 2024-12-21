import * as React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomeScreen from "./components/screens/home/HomeScreen";
import { AppRoutes } from "./utils/AppRoutes";
import CreatingList from "./components/pages/home/CreatingList";
import SingleList from "./components/pages/home/SingleList";
import LoginForm from "./components/pages/home/LoginForm";
import SignupForm from './components/pages/home/SignupForm';
import PopularCategory from './components/common/PopularCategory';
import Market from './components/pages/home/Market';
import ProductList from './components/pages/home/ProductList';
import ProductDetail from './components/pages/home/ProductDetail';
import Wishlist from './components/pages/Wishlist';
import AuthGuard from './guards/AuthGuard';
import UserProfile from './components/pages/home/UserProfile';
import UserDashboard from './components/pages/home/UserDashboard';
import SidebarLayout from './components/layout/SidebarLayout';
import TrackOrder from './components/pages/home/TrackOrder';



const getMainLayout = () => {
  return (<MainLayout>
    <Routes>
      <Route path={AppRoutes.HOME} element={<HomeScreen />} />
      <Route path={AppRoutes.ANY} element={<HomeScreen />} />
      <Route path={AppRoutes.CREATINGLIST} element={<CreatingList/>} />
      {/* <Route element={<AuthGuard/>}>
      </Route> */}
      <Route path={AppRoutes.CREATESINGLE} element={<SingleList/>} />

      <Route path={AppRoutes.MARKET} element={<Market/>} />
      <Route path={AppRoutes.PRODUCTLIST} element={<ProductList/>} />
      <Route path={AppRoutes.PRODUCTDETAIL} element={<ProductDetail/>} />
      <Route path={AppRoutes.WISHLIST} element={<Wishlist/>} />
      <Route element={<SidebarLayout/>}>
      <Route path={AppRoutes.USERPROFILE} element={<UserProfile/>} />
      <Route path={AppRoutes.DASHBOARD} element={<UserDashboard/>} />
      <Route path={AppRoutes.TRACKORDER} element={<TrackOrder/>} />

      </Route>  
    </Routes>
  </MainLayout>)

}

function App() {
  return (
    <>
      {getMainLayout()} 
      {/* <UserDashboard/> */}
     
    </>
  );
}

export default App;