import "../../App.css";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import HeaderA from "../../components/headerA/HeaderA";
import Navbarhead from "../../components/navbar/Navbar";
import Success from "../../components/success/Success";

function Successpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navbarhead />
      <HeaderA />
      <Success/>
      <Footer />
    </div>
  );
}

export default Successpage;
