import React from "react";
import { LoadingContainer } from "./components/loadingContainer";

import "virtual:windi.css";
import "./styles.css";

export const App = () => {
  return (
    <main className="h-screen max-h-screen grid place-items-center bg-light-900">
      <LoadingContainer />
    </main>
  );
};
