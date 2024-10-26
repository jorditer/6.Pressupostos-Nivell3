import { createContext, useState, useContext, ReactNode } from "react";

export interface Item {
  title: string;
  text: string;
  preu: number;
}

interface CounterContextProps {
  numPagines: number;
  incrementPagines: () => void;
  decrementPagines: () => void;
  numIdiomes: number;
  incrementIdiomes: () => void;
  decrementIdiomes: () => void;
  total: number;
  handleCheckboxChange: (index: number) => void;
  content: Item[];
  checkedStates: boolean[];

}
  const content = [
    { title: "Seo", text: "Programació d'una web responsive completa", preu: 300 },
    { title: "Ads", text: "Programació d'una web responsive completa", preu: 400 },
    { title: "Web", text: "Programació d'una web responsive completa", preu: 500 }
  ];

export const CounterContext = createContext<CounterContextProps | undefined>(undefined);

export const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [numPagines, setNumPagines] = useState(1);
  const [numIdiomes, setNumIdiomes] = useState(1);

  const incrementPagines = () => setNumPagines((prev) => (prev < 9 ? prev + 1 : prev));
  const decrementPagines = () => setNumPagines((prev) => (prev > 1 ? prev - 1 : prev));
  const incrementIdiomes = () => setNumIdiomes((prev) => (prev < 9 ? prev + 1 : prev));
  const decrementIdiomes = () => setNumIdiomes((prev) => (prev > 1 ? prev - 1 : prev));


  const [checkedStates, setCheckedStates] = useState([false, false, false]);

  const subtotal = content.reduce((sum, item, index) => sum + (checkedStates[index] ? item.preu : 0), 0);
  const total = subtotal + (checkedStates[2] ? (numPagines + numIdiomes) * 30 : 0);

  const handleCheckboxChange = (index: number) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };
  return (
    <CounterContext.Provider
      value={{ numPagines, incrementPagines, decrementPagines, numIdiomes, incrementIdiomes, decrementIdiomes, total, handleCheckboxChange, content, checkedStates }}
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
