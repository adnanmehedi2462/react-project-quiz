import { Navigate, Route, Routes } from "react-router-dom";
import "../styles/app.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import ProgressBar from "./ProgressBar";
// import Answers from "./Answers";
// import Quiz from "./pages/Quiz";
// import Result from "./pages/Result";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Layout>
  );
}

export default App;
