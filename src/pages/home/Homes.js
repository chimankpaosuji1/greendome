import "../../App.css";
import Navbarhead from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Collab from "../../components/collab/Collab";
import Degree from "../../components/degree/Dregree";
import Cert from "../../components/cert/Cert";
import Course from "../../components/course/Course";
import Free from "../../components/free/Free";
import Task from "../../components/task/Task";
import Verification from "../../components/verification/Verification";
import Community from "../../components/community/Community";
import Active from "../../components/active/Active";
import Business from "../../components/businness/Business";
import Footer from "../../components/footer/Footer";
// import Footer from "./components/footer/Footer";

function Home() {
  return (
    <div className="App">
      <Navbarhead />
      <Header />
      <Collab />
      <Degree />
      <Cert />
      <Course />
      <Free />
      <Task />
      <Verification />
      <Community />
      <Active />
      <Business />
      <Footer/>
    </div>
  );
}

export default Home;
