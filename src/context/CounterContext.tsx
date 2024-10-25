import { createContext, useState, useContext, ReactNode } from "react";

interface CounterContextProps {
  numPagines: number;
  incrementPagines: () => void;
  decrementPagines: () => void;
  numIdiomes: number;
  incrementIdiomes: () => void;
  decrementIdiomes: () => void;
}

export const CounterContext = createContext<CounterContextProps | undefined>(undefined);

export const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [numPagines, setNumPagines] = useState(1);
  const [numIdiomes, setNumIdiomes] = useState(1);

  const incrementPagines = () => setNumPagines((prev) => (prev < 9 ? prev + 1 : prev));
  const decrementPagines = () => setNumPagines((prev) => (prev > 1 ? prev - 1 : prev));
  const incrementIdiomes = () => setNumIdiomes((prev) => (prev < 9 ? prev + 1 : prev));
  const decrementIdiomes = () => setNumIdiomes((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <CounterContext.Provider
      value={{ numPagines, incrementPagines, decrementPagines, numIdiomes, incrementIdiomes, decrementIdiomes }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
};
