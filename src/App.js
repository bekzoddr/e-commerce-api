import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SingleRoute from "./pages/singleRoute/SingleRoute";
import Wishlist from "./pages/wishlist/Wishlist";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/footer/Footer";
import Cart from "./pages/cart/Cart";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import Contact from "./pages/contact/Contact";
import SignUp from "./pages/siginUp/SignUp";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import CreateCategory from "./pages/admin/create-category/CreateCategory";
import CreateProduct from "./pages/admin/create-product/CreateProduct";
import CreateUser from "./pages/admin/create-user/CreateUser";
import ManageCategory from "./pages/admin/manage-category/ManageCategory";
import ManageProduct from "./pages/admin/manage-product/ManageProduct";
import ManageUser from "./pages/admin/manage-user/ManageUser";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/single/:id" element={<SingleRoute />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/admin/" element={<Admin />}>
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="manage-category" element={<ManageCategory />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="manage-user" element={<ManageUser />} />
        </Route>
      </Routes>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
