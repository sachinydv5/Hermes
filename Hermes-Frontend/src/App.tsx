import * as React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import { Suspense } from 'react';
import MainLayout from "./components/layout/MainLayout";
import { AppRoutes } from "./utils/AppRoutes";
import AuthGuard from './guards/AuthGuard';
import SidebarLayout from './components/layout/SidebarLayout';
import Cart from './components/pages/home/Cart';
import { Company } from './components/pages/home/Company';



// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Lazy load components
const HomeScreen = React.lazy(() => import("./components/screens/home/HomeScreen"));
const Market = React.lazy(() => import("./components/pages/home/Market"));
const ProductList = React.lazy(() => import("./components/pages/home/ProductList"));
const ProductDetail = React.lazy(() => import("./components/pages/home/ProductDetail"));
const CreatingList = React.lazy(() => import("./components/pages/home/CreatingList"));
const SingleList = React.lazy(() => import("./components/pages/home/SingleList"));
const MultipleProduct = React.lazy(() => import("./components/pages/home/MultipleProduct"));
const Wishlist = React.lazy(() => import("./components/pages/Wishlist"));
const UserProfile = React.lazy(() => import("./components/pages/home/UserProfile"));
const UserDashboard = React.lazy(() => import("./components/pages/home/UserDashboard"));
const TrackOrder = React.lazy(() => import("./components/pages/home/TrackOrder"));
const ErrorPage = React.lazy(() => import("./components/pages/home/ErrorPage"));
const getMainLayout = () => {
  return (
    <MainLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public Routes */}
          <Route path={AppRoutes.HOME} element={<HomeScreen />} />
          <Route path={AppRoutes.MARKET} element={<Market />} />
          <Route path={AppRoutes.PRODUCTLIST} element={<ProductList />} />
          <Route path={AppRoutes.PRODUCTDETAIL} element={<ProductDetail />} />
          <Route path={AppRoutes.COMPANY} element={<Company/>} />
          
          {/* Protected Routes */}
          <Route element={<AuthGuard />}>
            <Route path={AppRoutes.CREATINGLIST} element={<CreatingList />} />
            <Route path={AppRoutes.CREATESINGLE} element={<SingleList />} />
            <Route path={AppRoutes.MULTIPLEPRODUCT} element={<MultipleProduct />} />
            <Route path={AppRoutes.WISHLIST} element={<Wishlist />} />
            <Route path={AppRoutes.CART} element={<Cart/>} />

            
            {/* Protected Routes with Sidebar */}
            <Route element={<SidebarLayout />}>
              <Route path={AppRoutes.USERPROFILE} element={<UserProfile />} />
              <Route path={AppRoutes.DASHBOARD} element={<UserDashboard />} />
              <Route path={AppRoutes.TRACKORDER} element={<TrackOrder />} />
            </Route>
          </Route>
  
          {/* Error Route */}
          <Route path={AppRoutes.ANY} element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  )
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