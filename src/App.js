// ui
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Layout from "./Layouts/AuthLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoPage from "./pages/NoPage";
import DashLayout from "./Layouts/DashLayout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/admin" element={<DashLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
