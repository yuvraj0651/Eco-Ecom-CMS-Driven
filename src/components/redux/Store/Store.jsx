import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../../API/Auth/AuthThunk";
import FooterReducer from "../../API/Auth/FooterThunk";
import HomeReducer from "../../API/Homepage/Homepage";
import AboutReducer from "../../API/About/AboutThunk";
import CheckoutReducer from "../../API/Form/FormThunk";

const Store = configureStore({
  reducer: {
    auth: AuthReducer,
    footer: FooterReducer,
    home: HomeReducer,
    about: AboutReducer,
    checkoutForm: CheckoutReducer,
  },
});

export default Store;
