"use client";
import React, { createContext, ReactNode } from "react";

type GlobalContextType = {};

const AppContext = createContext<GlobalContextType | null>(null);

const Provider = ({ children }: { children: ReactNode }) => {
  const contextValues: GlobalContextType = {};

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export { AppContext, Provider };
