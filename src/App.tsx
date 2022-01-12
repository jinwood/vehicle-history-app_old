import Layout from "./pages/layout/Default";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddVehicle from "./pages/AddVehicle";
import { ProvideAuth, useProvideAuth } from "./hooks/auth";
import Loading from "./pages/Loading";

const App = () => {
  const { auth: user } = useProvideAuth();
  return (
    <div className="App bg-slate-300">
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<></>} />

            {user ? (
              <Route
                path="/"
                element={
                  <ProvideAuth>
                    <Home user={user} />
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
