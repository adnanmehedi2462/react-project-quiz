import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/app.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Answers from "./Answers";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateOutlet from "./PrivateOutlet";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<PublicRoute />}>
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/result" element={<Result />} />
          <Route path="/quiz" element={<PrivateOutlet />}>
            <Route path="/quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
