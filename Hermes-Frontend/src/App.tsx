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



const getMainLayout = () => {
  return (<MainLayout>
    <Routes>
      <Route path={AppRoutes.HOME} element={<HomeScreen />} />
      <Route path={AppRoutes.ANY} element={<HomeScreen />} />
      <Route path={AppRoutes.CREATINGLIST} element={<CreatingList/>} />
      <Route path={AppRoutes.CREATESINGLE} element={<SingleList/>} />
      <Route path={AppRoutes.MARKET} element={<Market/>} />
      <Route path={AppRoutes.ProductList} element={<ProductList/>} />
      <Route path={AppRoutes.ProductDetail} element={<ProductDetail/>} />
    </Routes>
  </MainLayout>)

}

function App() {
  return (
    <>
      {getMainLayout()} 
     
    </>
  );
}

export default App;