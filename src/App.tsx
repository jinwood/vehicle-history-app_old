import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { login, logout, selectUser } from "./store/slices/userSlice";
import Layout from "./components/layout/Default";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import AddVehicle from "./pages/AddVehicle";
import { AuthType } from "./types";
import { Box, CssBaseline } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const auth = getAuth();
  const { uid } = user || {};

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [auth, dispatch]);

  const mdTheme = createTheme();

  return (
    <div className="App bg-slate-300">
      <ThemeProvider theme={mdTheme}>
        <Box
          sx={{ display: "flex", height: "100vh", backgroundColor: "#e0e0e5" }}
        >
          <CssBaseline />
          <Router>
            <Layout>
              <Routes>
                <Route
                  path="/login"
                  element={<LoginRegister type={AuthType.LOGIN} />}
                />
                <Route
                  path="/register"
                  element={<LoginRegister type={AuthType.REGISTER} />}
                />

                {user ? (
                  <Route path="/" element={<Home user={user} />} />
                ) : (
                  <Route
                    path="/"
                    element={<LoginRegister type={AuthType.LOGIN} />}
                  />
                )}
                <Route path="/add-vehicle" element={<AddVehicle uid={uid} />} />
              </Routes>
            </Layout>
          </Router>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default App;
