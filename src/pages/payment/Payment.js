import "../../App.css";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import HeaderA from "../../components/headerA/HeaderA";
import Navbarhead from "../../components/navbar/Navbar";
import Payments from "../../components/payments/Payments";

function Payment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navbarhead />
      <HeaderA />
      <Payments/>
      <Footer />
    </div>
  );
}

export default Payment;
