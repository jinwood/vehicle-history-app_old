import React from "react";
import LoginForm from "./components/LoginForm";
import Layout from "./pages/layout/Default";

function App() {
  return (
    <div className="App bg-slate-300">
      <Layout>
        <LoginForm />
      </Layout>
    </div>
  );
}

export default App;
