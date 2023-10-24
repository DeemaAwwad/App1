import Navbar from "./Navbar.jsx";
import Products from "./Products.jsx";
import Footer from "./Footer.jsx";
export default function App(){
  return(
    <>
    <div className="container">
      <Navbar/>
      <Products/>
      <Footer/>
    </div>
    </>
  );
};
