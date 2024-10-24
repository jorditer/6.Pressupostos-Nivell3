import { useState } from 'react';
import Counter from './Counter'

interface CardProps {
  title: string;
  text: string;
  preu: number;
  checked: boolean;
  onChange: () => void;
  numPagines: number;
  setNumPagines: (count: number) => void;
  numIdiomes: number;
  setNumIdiomes: (count: number) => void;
  toggleWeb: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const Card: React.FC<CardProps> = ({ title, text, preu, checked, onChange, numPagines, setNumPagines, numIdiomes, setNumIdiomes, toggleWeb }) => {


  return (
    <div className="hover:shadow-xl shadow rounded-3xl bg-white hover:outline hover:outline-orange-400 gap-4 p-10">
      <div className="flex-nowrap flex flex-col sm:flex-row  justify-between items-center">
        <div className="border text-center md:text-start">
          <h2 className="border">{title}</h2>
          <p className="mt-2">{text}</p>
        </div>
        <h2 className="whitespace-nowrap border">
          <span>{preu}</span> €
        </h2>
        {/* h2 className="text-nowrap"><span>{preu}</span> €</h2> */}
        <div className="self-end sm:self-center space-x-4 flex border">
          <input
            className="cursor-pointer my-auto"
            type="checkbox"
            name="afegir"
            id={title}
            checked={checked}
            onChange={onChange}
            onClick={title === "Web" ? toggleWeb : undefined}
          />
          {/* el title y el for han de ser iguales para que que cuando clickes "Afegir" se active la checkbox correcta */}
          <label className="hidden sm:block" htmlFor={title}>
            Afegir
          </label>
        </div>
      </div>
        {title === "Web" && (
          <div className={`${checked ? "" : "hidden"}`}>
            <Counter text="Nombre de pàgines"/>
            <Counter text="Nombre de llenguatges"/>
          </div>
        )}
    </div>
  );
};

export default Card;
