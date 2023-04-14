import "../../App.css";
import { useEffect } from "react";
import Navbarhead from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HeaderA from "../../components/headerA/HeaderA";
import Admin from "../../components/admin/Admin";

function Admission() {


   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
   
  return (
    <div className="App">
      <Navbarhead />
      <HeaderA />
      <Admin />
      <Footer />
    </div>
  );
}

export default Admission;
