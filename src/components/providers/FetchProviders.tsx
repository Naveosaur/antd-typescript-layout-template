"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type FetchContextType = {
  shouldFetch: boolean;
  setShouldFetch: Dispatch<SetStateAction<boolean>>;
};

const FetchContext = createContext<FetchContextType | undefined>(undefined);

type FetchProviderProps = {
  children: ReactNode;
};

export const FetchProvider = ({ children }: FetchProviderProps) => {
  const [shouldFetch, setShouldFetch] = useState(false);

  return (
    <FetchContext.Provider value={{ shouldFetch, setShouldFetch }}>
      {children}
    </FetchContext.Provider>
  );
};

export const useFetchContext = () => {
  const context = useContext(FetchContext);
  if (context === undefined) {
    throw new Error("useFetchContext must be used within a FetchProvider");
  }
  return context;
};
