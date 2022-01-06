import React from "react";
import Layout from "./pages/layout/Default";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from "./pages/Home";
import { getAuth } from "firebase/auth";
import Login from "./pages/Login";
import AddVehicle from "./pages/AddVehicle";

const App = () => {
  return (
    <div className="App bg-slate-300">
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<></>} />

            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/add-vehicle"
              element={
                <RequireAuth>
                  <AddVehicle />
                </RequireAuth>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = getAuth();
  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  console.log("user", user);

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default App;
