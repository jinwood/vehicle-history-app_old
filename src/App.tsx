import React from "react";
import Layout from "./pages/layout/Default";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import { getAuth } from "firebase/auth";
import Login from "./pages/Login";

const App = () => {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="App bg-slate-300">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<></>} />
            <Route path="/new-user" element={<NewUser />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
