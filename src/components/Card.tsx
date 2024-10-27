import Counter from './Counter';

interface CardProps {
  title: string;
  text: string;
  preu: number;
  checked: boolean;
  onChange: () => void;
}

const Card: React.FC<CardProps> = ({ title, text, preu, checked, onChange }) => {
  return (
    <div className="cardElement">
      <div className="flex-nowrap flex flex-col gap-y-3 sm:flex-row justify-between items-center">
        <div className="cardContent">
          <h2 className="mb-4 sm:mb-0">{title}</h2>
          <p className="mt-2">{text}</p>
        </div>
        <h2 className="whitespace-nowrap mr-3">
          <span>{preu}</span> €
        </h2>
        <div className="self-end sm:self-center space-x-4 flex ">
          <input
            className="cursor-pointer my-auto"
            type="checkbox"
            name="afegir"
            id={title}
            checked={checked}
            onChange={onChange}
          />
          <label className="hidden sm:block" htmlFor={title}>
            Afegir
          </label>
        </div>
      </div>
      {title === "Web" && checked && (
        <div>
          <Counter text="Nombre de pàgines:" />
          <Counter text="Nombre de llenguatges:" />
        </div>
      )}
    </div>
  );
};

export default Card;
