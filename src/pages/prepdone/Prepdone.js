import "../../App.css";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import HeaderA from "../../components/headerA/HeaderA";
import Navbarhead from "../../components/navbar/Navbar";
import Prep from "../../components/prep/Prep";

function Prepdone() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navbarhead />
      <HeaderA />
      <Prep />
      <Footer />
    </div>
  );
}

export default Prepdone;
