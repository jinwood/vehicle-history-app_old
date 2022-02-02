import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./components/layout/Default";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import AddVehicle from "./pages/AddVehicle";
import { ProvideAuth, RequireAuth, useProvideAuth } from "./hooks/auth";
import { AuthType } from "./types";
import { Box, CssBaseline } from "@mui/material";
import { ProvideVehicle, useProvideVehicle } from "./hooks/vehicles";

const App = () => {
  const { auth: user } = useProvideAuth();
  const { uid } = user || {};

  const { getVehicle } = useProvideVehicle();
  if (uid) {
    getVehicle(String(uid));
  }

  const mdTheme = createTheme();

  return (
    <div className="App bg-slate-300">
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
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
                  <Route
                    path="/"
                    element={
                      <ProvideAuth>
                        <ProvideVehicle>
                          <Home user={user} />
                        </ProvideVehicle>
                      </ProvideAuth>
                    }
                  />
                ) : (
                  <Route
                    path="/"
                    element={<LoginRegister type={AuthType.LOGIN} />}
                  />
                )}
                <Route
                  path="/add-vehicle"
                  element={
                    <RequireAuth>
                      <ProvideAuth>
                        <AddVehicle uid={uid} />
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
