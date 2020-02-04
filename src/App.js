import React from "react";

import ContextProviders from "./context";
import AppNav from "./components/AppNav";
import Albums from "./components/Albums";
import Album from "./components/Album";

import "./App.css";

const App = () => (
  <ContextProviders>
    <div className="App">
      <AppNav />
      <Albums />
      <Album />
    </div>
  </ContextProviders>
);

export default App;
