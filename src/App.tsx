import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./pages/layout/Default";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AddVehicle from "./pages/AddVehicle";
import { ProvideAuth, RequireAuth, useProvideAuth } from "./hooks/auth";
import { AuthType } from "./types";
import {
  Badge,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "./components/layout/AppBar";
import { MenuIcon } from "@heroicons/react/outline";

const App = () => {
  const { auth: user } = useProvideAuth();
  const mdTheme = createTheme();

  const open = true;
  const toggleDrawer = () => {};

  return (
    <div className="App bg-slate-300">
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar></AppBar>

          <Router>
            <Layout>
              <Routes>
                <Route path="/login" element={<Auth type={AuthType.LOGIN} />} />
                <Route
                  path="/register"
                  element={<Auth type={AuthType.REGISTER} />}
                />

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
                  <Route path="/" element={<Auth type={AuthType.LOGIN} />} />
                )}
                <Route
                  path="/add-vehicle"
                  element={
                    <RequireAuth>
                      <ProvideAuth>
                        <AddVehicle />
                      </ProvideAuth>
                    </RequireAuth>
                  }
                />
              </Routes>
            </Layout>
          </Router>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default App;
