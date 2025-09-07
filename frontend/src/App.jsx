import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/authPages/Login";
import Register from "./pages/authPages/Register";
import Resetpassword from "./pages/authPages/Resetpassword";
import Pagenotfound from "./pages/Pagenotfound";
import Allteachers from "./pages/teacherpages/Allteachers";
import Allstudents from "./pages/studentpages/Allstudents";
import AffiliateProg from "./pages/AffiliateProg";
import Faqs from "./pages/Faqs";
import AddNewTeacher from "./pages/teacherpages/AddNewTeacher";
import Email from "./pages/teacherpages/email";
import AddNewStudent from "./pages/studentpages/AddNewStudent";
import Pricing from "./pages/Pricing";
import TeacherDashboard from "./pages/teacherpages/TeacherDashboard";
import StudentDashboard from "./pages/studentpages/StudentDashboard";
import StudentProfEdit from "./pages/studentpages/StudentProfEdit";
import TeacherProfEdit from "./pages/teacherpages/TeacherProfEdit";
import Payment from "./pages/Payment";
import Posts from "./pages/posts/Posts";
import AddNewPost from "./pages/posts/AddNewPost";
import UserPosts from "./pages/posts/UserPosts";
import Contact from "./pages/Contact";

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
        <Route path="/affiliate-program" element={<AffiliateProg />} />
        <Route path="/add-new-teacher" element={<AddNewTeacher />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher-edit-profile" element={<TeacherProfEdit />} />
        <Route path="/add-new-student" element={<AddNewStudent />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-edit-profile" element={<StudentProfEdit />} />
        <Route path="/student" element={<AddNewStudent />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/email" element={<Email />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/add-new-post" element={<AddNewPost />} />
        <Route path="/posts-by-user" element={<UserPosts />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
