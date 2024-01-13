import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import HomeLayout from "./Layout/Homelayout";
import Aboutus from "./Pages/Aboutus";
import Notfound from "./Pages/Notfound";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import CourseList from "./Pages/course/Getallcourse";
import Contactus from "./Pages/Contactus";
import CourseDescription from "./Pages/course/CourseDescription";
import { Denied } from "./Pages/Denied";
import Requireauth from "./Auth/Requireauth";
import Createcourse from "./Pages/course/Createcourse";

function App() {
  // Routes Are container or Tree Which Provides the Branch Route to visit the other path.
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<HomeLayout />}>
          {" "}
        </Route>
        <Route path="/about" element={<Aboutus />}></Route>
        <Route path="/courses" element={<CourseList />} />
        <Route path="/denied" element={<Denied />} />

        <Route element={<Requireauth allowed={["ADMIN"]} />}>
          <Route path="/course/create" element={<Createcourse />} />
        </Route>

        <Route
          path="/course/courseDescription"
          element={<CourseDescription />}
        />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
