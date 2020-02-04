import React from "react";

import { AuthContextProvider } from "./authContext";
import { AlbumsContextProvider } from "./albumsContext";

export * from "./authContext";
export * from "./albumsContext";

const ContextProviders = ({ children }) => (
  <AuthContextProvider>
    <AlbumsContextProvider>{children}</AlbumsContextProvider>
  </AuthContextProvider>
);

export default ContextProviders;
