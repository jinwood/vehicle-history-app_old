import React from "react";
import Layout from "./pages/layout/Default";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/layout/Login";
import Register from "./pages/layout/Register";
import NoUser from "./pages/NoUser";

function App() {
  return (
    <div className="App bg-slate-300">
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/no-user" element={<NoUser />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
