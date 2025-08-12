import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./components/login-form";
import { NotFoundPage } from "./components/404";
import { SignUpPage } from "./components/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage/>} />
        <Route path="/auth/signin" Component={LoginPage} />
        <Route path="auth/signUp" Component={SignUpPage}/>

      </Routes>
    </Router>
  );
}

export default App;
