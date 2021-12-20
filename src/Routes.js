import React, { Fragment } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import SignUpPage from "./Pages/SignUpPage";
import AdminDashboardPage from "./Pages/AdminDashboardPage";
import CartPage from "./Pages/CartPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ProductListingPage from "./Pages/ProductListingPage";
import CheckOutPage from "./Pages/CheckoutPage";
import SummaryPage from "./Pages/SummaryPage";

const Router = (props) => (
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/" element={<HomePage />} />
      <Route
        exact
        path="/products/:category"
        element={<ProductListingPage />}
      />
      <Route exact path="/product-detail/:id" element={<ProductDetailPage />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route exact path="/checkout" element={<CheckOutPage />} />
      <Route exact path="/summary" element={<SummaryPage />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminDashboardPage />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
