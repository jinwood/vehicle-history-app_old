import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { login, logout, selectUser } from "./store/slices/userSlice";
import Layout from "./components/layout/Default";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import AddVehicle from "./pages/AddVehicle";
import { AuthType } from "./types";
import { CssBaseline } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Box from "@mui/system/Box";

const App = () => {
  const [fresh, setFresh] = useState(true);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        setFresh(false);
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        setFresh(false);
        dispatch(logout());
      }
    });
    return () => {
      auth.signOut();
    };
  }, [auth, dispatch]);

  const mdTheme = createTheme();

  return (
    <div className="App bg-slate-300">
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex", height: "100vh" }}>
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

                {user && !fresh && <Route path="/" element={<Home />} />}
                {!user && !fresh && (
                  <Route
                    path="/"
                    element={<LoginRegister type={AuthType.LOGIN} />}
                  />
                )}
                <Route path="/add-vehicle" element={<AddVehicle />} />
              </Routes>
            </Layout>
          </Router>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default App;
