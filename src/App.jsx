import "./App.css";
import "./bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Navbarheader from "./screens/Homepage/component/Navbar";
import Footer from "./component/common/Footer";
import Mainbody from "./screens/Adminpage/component/Mainbody";
import Homepage from "./screens/Homepage/Homepage";
import Adminpage from "./screens/Adminpage/Adminpage";
import Commonlist from "./screens/Studentlistscreen/Commonlist";
import Addstudents from "./screens/Addstudents";
import Router from "./router";
import Login from "./screens/common/Loginpage/Login";

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
