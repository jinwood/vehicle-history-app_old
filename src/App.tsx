import React from "react";
import Layout from "./pages/layout/Default";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App bg-slate-300">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Auth title="Login" />} />
            <Route path="/register" element={<Auth title="Register" />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
