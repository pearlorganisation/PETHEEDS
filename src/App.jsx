import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";


// Components
import Header from "./pages/Components/Header";
import Footer from "./pages/Components/Footer";
import NotFound from "./pages/Components/404/NotFound";

// Lazy-loaded Pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const About = React.lazy(() => import("./pages/Components/About/About"));
const OurProject = React.lazy(() => import("./pages/Components/OurProduct/OurProject"));
const ProductList = React.lazy(() => import("./pages/Components/Product/ProductList"));
const SingleProduct = React.lazy(() => import("./pages/Components/Product/SingleProduct"));
const Booknow = React.lazy(() => import("./pages/Components/Booknow"));
const Blog = React.lazy(() => import("./pages/Blogs/Blog"));
const BlogDetails = React.lazy(() => import("./pages/Blogs/BlogDetails"));
const Stats = React.lazy(() => import("./pages/Components/Stats/Stats"));
const Ourvision = React.lazy(() => import("./pages/Components/Ourvision/Ourvision"));
const Ourservice = React.lazy(() => import("./pages/Components/OurService/Ourservice"));
const Products = React.lazy(() => import("./pages/Products/Products"));
const SignUp = React.lazy(() => import("./pages/Components/Auth/SignUp"));
const SignIn = React.lazy(() => import("./pages/Components/Auth/SignIn"));
const Reset = React.lazy(() => import("./pages/Components/Auth/Reset"));
const Otpvarfication = React.lazy(() => import("./pages/Components/Auth/Otpvarfication"));
const ChangePassword = React.lazy(() => import("./pages/Components/Auth/ChangePassword"));
const SignupOtpVerification = React.lazy(() => import("./pages/Components/Auth/SignupOtpVerification"));
const FormSignUp = React.lazy(() => import("./pages/Components/Auth/FormSignup"));
const ProfilePage = React.lazy(() => import("./pages/Components/ProfilePage"));
const Settings = React.lazy(() => import("./pages/Settings/Settings"));
const Profile = React.lazy(() => import("./pages/Settings/Profile"));
const Order = React.lazy(() => import("./pages/Components/Order/Order"));
const OrderList = React.lazy(() => import("./pages/Components/Order/OrderList"));
const Cart = React.lazy(() => import("./pages/Components/Product/Cart"));
const CheckoutPage = React.lazy(() => import("./pages/Components/Checkout/CheckoutPage"));
const ProductByCollection = React.lazy(() => import("./pages/ProductByCollection/ProductByCollection"));
const Invoice = React.lazy(() => import("./pages/Components/Product/Invoice"));
const NewAddress = React.lazy(() => import("./pages/Components/Address/NewAddress"));
const Billing = React.lazy(() => import("./pages/Components/Payment/Billing"));
const PrivacyPolicy = React.lazy(() => import("./pages/Components/Product/PrivacyPolicy"));
const RefundPolicy = React.lazy(() => import("./pages/Components/RefundPolicy/RefundPolicy"));
const TermsOfUse = React.lazy(() => import("./pages/Components/TermsOfUse/TermsOfUse"));
const Contactus = React.lazy(() => import("./pages/Components/Contact/Contactus"));

function App() {
  const { isUserLoggedIn, isOtpSentSuccessfully, isOtpVerified, isOtpVerifiedSignup, isOtpSentSuccessfullySignup } =
    useSelector((state) => state.auth);

  // Helper function for protected routes
  const ProtectedRoute = ({ children }) =>
    isUserLoggedIn ? children : <Navigate to="/login" />;

  return (
    <div className="pt-16">
      <Header />
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen ">
        <div className="flex flex-col items-center space-y-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-[6px] border-blue-600 border-t-gray-200 rounded-full animate-spin"></div>
          {/* Loading Text */}
          <p className="text-blue-600 text-lg font-semibold">Loading, please wait...</p>
        </div>
      </div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourProduct" element={<OurProject />} />
          <Route path="/product" element={<ProductByCollection />} />
          <Route path="/singleproduct/:productId" element={<SingleProduct />} />
          <Route path="/booknow" element={<Booknow />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/ourvision" element={<Ourvision />} />
          <Route path="/ourservice" element={<Ourservice />} />
          <Route path="/productsList" element={<Products />} />
          <Route path="/contact" element={<Contactus />} />

          {/* Authentication Routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/otp" element={!isUserLoggedIn && isOtpSentSuccessfully ? <Otpvarfication /> : <SignIn />} />
          <Route path="/changePassword" element={!isUserLoggedIn && isOtpVerified ? <ChangePassword /> : <SignIn />} />
          <Route path="/signupOtp" element={!isUserLoggedIn && isOtpSentSuccessfullySignup ? <SignupOtpVerification /> : <SignUp />} />
          <Route path="/formSignup" element={!isUserLoggedIn && isOtpVerifiedSignup ? <FormSignUp /> : <SignUp />} />

          {/* Protected Routes */}
          <Route path="/profile" element={<ProtectedRoute><Settings /></ProtectedRoute>}>
            <Route index={true} element={<Profile />} />
            <Route path="orderList" element={<OrderList />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
          <Route path="/orderList" element={<ProtectedRoute><OrderList /></ProtectedRoute>} />
          <Route path="/addnewaddress" element={<ProtectedRoute><NewAddress /></ProtectedRoute>} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/order" element={<ProtectedRoute><Order /></ProtectedRoute>} />
          <Route path="/invoice" element={<ProtectedRoute><Invoice /></ProtectedRoute>} />

          {/* Policies */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund_policy" element={<RefundPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
