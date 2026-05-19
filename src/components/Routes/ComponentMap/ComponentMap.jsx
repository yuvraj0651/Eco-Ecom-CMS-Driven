import { lazy } from "react";
const HomePage = lazy(() => import("../../Layout/Pages/Home/HomePage"));
const Products = lazy(() => import("../../Layout/Pages/Products/Products"));
const ProductDetail = lazy(
  () => import("../../Layout/Pages/ProductDetail/ProductDetail"),
);
const AuthPage = lazy(() => import("../../Layout/Pages/Auth/AuthPage"));
const CartPage = lazy(() => import("../../Layout/Pages/Cart/CartPage"));
const Checkout = lazy(() => import("../../Layout/Pages/Checkout/Checkout"));
const ThankYou = lazy(() => import("../../Layout/Pages/ThankYou/ThankYou"));
const AboutPage = lazy(() => import("../../Layout/Pages/About/AboutPage"));

export const componentMap = {
  HomePage,
  Products,
  ProductDetail,
  AboutPage,
  CartPage,
  Checkout,
  ThankYou,
  AboutPage,
};
