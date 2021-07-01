import React from "react";
import { AnimateContainer } from "./components/animateContainer";

import "virtual:windi.css";
import "./styles.css";

export const App = () => {
  return (
    <main className="h-screen max-h-screen grid place-items-center bg-light-900">
      <AnimateContainer />
    </main>
  );
};
