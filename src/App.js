import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import Home from './Components/Home';
import ContactUs from "./Components/ContactUs";
import ScrollToTop from "./Components/scrollTop";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
    <main className="bg-transparent min-h-screen relative mx-auto lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
  <Home/>
  <ContactUs/>
  <ScrollToTop/>
  <ToastContainer/>
  <Footer/>
  </main>
    </>
  );
}

export default App;
