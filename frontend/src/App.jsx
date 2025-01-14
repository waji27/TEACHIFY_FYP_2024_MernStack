import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/authPages/Login";
import Register from "./pages/authPages/Register";
import Resetpassword from "./pages/authPages/Resetpassword";
import Pagenotfound from "./pages/Pagenotfound";
import Allteachers from "./pages/teacherpages/Allteachers";
import Allstudents from "./pages/studentpages/Allstudents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/all-teachers" element={<Allteachers />} />
        <Route path="/all-students" element={<Allstudents />} />
      </Routes>
    </>
  );
}

export default App;
