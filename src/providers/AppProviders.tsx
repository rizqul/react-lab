import React from "react";
import { CounterProvider } from "../context/CounterContext";

function AppProviders({ children }: { children: React.ReactNode }) {
  return <CounterProvider>{children}</CounterProvider>;
}

export default AppProviders;
