import React from "react";
import Layout from "./pages/layout/Default";

function App() {
  return (
    <div className="App bg-slate-300">
      <Layout>
        <div className="text-center">
          <p>I'm the content</p>
        </div>
      </Layout>
    </div>
  );
}

export default App;
