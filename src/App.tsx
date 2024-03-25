import { Route, Routes, useNavigate } from "react-router";
import LoginPage from "./pages/LoginPage";
import ForgotPassPage from "./pages/ForgotPassPage";
import CreateNewPassPage from "./pages/CreateNewPassPage";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/login')
    }else navigate(location.pathname)
  }, [location.pathname])
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgotPass" element={<ForgotPassPage />} />
      <Route path="/newPass" element={<CreateNewPassPage />} />
    </Routes>
  );
};

export default App;
