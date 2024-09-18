import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ADD_STUDENT_ROUTE,
  ADMIN_ROUTE,
  DELETE_STUDENT_ROUTE,
  HOME_ROUTE,
  LIST_STUDENT_ROUTE,
  LOGIN_ROUTE,
} from "./constant";
import Homepage from "./screens/Homepage/Homepage";
import Adminpage from "./screens/Adminpage/Adminpage";
import Addstudents from "./screens/Addstudents";
import Commonlist from "./screens/Studentlistscreen/Commonlist";
import Login from "./screens/common/Loginpage/Login";

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Homepage />} />
          <Route path={ADMIN_ROUTE} element={<Adminpage />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={ADD_STUDENT_ROUTE} element={<Addstudents />} />
          <Route path={LIST_STUDENT_ROUTE} element={<Commonlist />} />
          <Route
            path={DELETE_STUDENT_ROUTE}
            element={<Commonlist delete={true} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
