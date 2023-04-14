import "../../App.css";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import HeaderA from "../../components/headerA/HeaderA";
import Admin from "../../components/admin/Admin";
import Reg from "../../components/reg/Reg";
import Navbarhead from "../../components/navbar/Navbar";

function Regpage() {

   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);

  return (
    <div className="App">
      <Navbarhead/>
      <HeaderA />
      <Reg/>
      <Footer />
    </div>
  );
}

export default Regpage;
