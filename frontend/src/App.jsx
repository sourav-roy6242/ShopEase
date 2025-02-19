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

import "./App.css";

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
      </Routes>
    </div>
  );
}

export default App;
