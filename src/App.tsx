import React, { ReactNode } from "react";
import Layout from "./pages/layout/Default";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import { getAuth } from "firebase/auth";
import Login from "./pages/Login";
import AddVehicle from "./pages/AddVehicle";
import { ProvideAuth, useAuth, useProvideAuth } from "./hooks/auth";

const App = () => {
  const auth = useProvideAuth();
  return (
    <div className="App bg-slate-300">
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<></>} />

            {auth.user ? (
              <Route
                path="/"
                element={
                  <ProvideAuth>
                    <Home user={auth.user} />
                  </ProvideAuth>
                }
              />
            ) : (
              <Route path="/" element={<Login />} />
            )}
            <Route
              path="/add-vehicle"
              element={
                <ProvideAuth>
                  <AddVehicle />
                </ProvideAuth>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
