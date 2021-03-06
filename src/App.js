import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import * as React from "react";
import ResponsiveAppBar from "./components/Navbar";
import SignIn from "./pages/Login";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import SideBar from "./components/SideBar";
import HeaderEdit from "./pages/Dashboard/HeaderEdit";
import AddEducation from "./pages/Dashboard/Education/AddEducation";
import EditEducations from "./pages/Dashboard/Education/EditEducations";
import { AuthContextProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="dashboard/*" element={<Dashboard />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  );
}

function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function Login() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

function Dashboard() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/header" element={<HeaderEdit />} />
        <Route path="/addEducation" element={<AddEducation />} />
        <Route path="/editEducation/:id" element={<EditEducations />} />
      </Routes>
      <SideBar />
    </div>
  );
}

export default App;
