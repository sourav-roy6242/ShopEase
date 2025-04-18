import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import HomePage from "./pages/Homepage";
import ContactUs from "./pages/Contactus";
import Shopregister from "./pages/Shopregister";
import AboutUs from "./pages/AboutUs";
import ProductForm from "./pages/Uploadpage";
import UserRegistration from "./pages/userRegister";
import EmailVerify from "./pages/EmailVerify";
import ResetPassword from "./pages/ResetPassword";
import UploadPage from "./pages/Uploadpage";
import SubscriptionPage from "./pages/SubcriptionPage";
import WorkingDetails from "./pages/WorkingDetails";
import VideoPage from "./pages/VideoPage.jsx";
import SellerDashboard from "./pages/newHomepage.jsx";
import ConfirmShopDetails from "./pages/ConfirmShopDetails.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
<<<<<<< HEAD
import DeliveryBoyDash from "./pages/deliveryBoyDashboard.jsx";
import BuyerHomePage from "./pages/BuyerHomePage.jsx"

=======
import UserLocation from "./pages/LocationPage.jsx";
import DeliveryBoyDash from "./DeliveryBoyPages/deliveryBoyDashboard.jsx";
import DeliveryBoyHome from "./DeliveryBoyPages/DeliveryBoyHomepage.jsx";
import DeliveryBoyRegisterForm from "./DeliveryBoyPages/DeliveryBoyRegisterForm.jsx";
>>>>>>> b83690c36e00d855714f7190b19325cfaf33e49e
import "./App.css";
import CardPayment from "./components/CardPayment.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-public-key-here");

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/shopregister" element={<Shopregister />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/productform" element={<ProductForm />} />
        <Route path="/userregister" element={<UserRegistration />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/uploadpage" element={<UploadPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/workingdetails" element={<WorkingDetails />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/dashboard" element={<SellerDashboard />} />
        <Route path="/confirm-shop-details" element={<ConfirmShopDetails />} />
        <Route path="/payment" element={<PaymentPage />} />
<<<<<<< HEAD
        <Route path="/deliverydash" element={<DeliveryBoyDash/>} />
        <Route path="/buyerhome" element={<BuyerHomePage/>} />
       
=======
        <Route path="/location" element={<UserLocation />} />
        <Route path="/deliverydash" element={<DeliveryBoyDash />} />
        <Route path="/deliveryboy" element={<DeliveryBoyHome />} />
        <Route path="/deliveryregister" element={<DeliveryBoyRegisterForm />} />

        <Route 
          path="/card" 
          element={
            <Elements stripe={stripePromise}>
              <CardPayment />
            </Elements> }/>
>>>>>>> b83690c36e00d855714f7190b19325cfaf33e49e
      </Routes>
    </div>
  );
}

export default App;