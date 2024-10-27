import { useCounterContext } from "../context/CounterContext"; // Import the hook
import { useState } from "react";
import ReactDOM from "react-dom";
import IdiomModal from "./Modals/IdiomModal";

const Counter: React.FC<{ text: string }> = ({ text }) => {
  const { numPagines, incrementPagines, decrementPagines, numIdiomes, incrementIdiomes, decrementIdiomes } =
    useCounterContext();

  // Conditionally select the correct values based on the text prop
  const isPagines = text === "Nombre de pàgines:";
  const number = isPagines ? numPagines : numIdiomes;
  const increment = isPagines ? incrementPagines : incrementIdiomes;
  const decrement = isPagines ? decrementPagines : decrementIdiomes;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const title = isPagines ? "Número de llenguatges" : "Número de pàgines";
  const content = isPagines
    ? "Afageix les pàgines que necessesitis per a dur a terme el teu projecte. El cost de cada pàgina és de 30€"
    : "Afageix les llengües que tindrà el teu projecte, el cost de cada llenguatge és de 30€";

  return (
    <div className="flex flex-col items-end">
      <div className="flex items-center">
        <button onClick={toggleModal}>&#9432;&nbsp;</button>
        {isModalOpen && ReactDOM.createPortal(<IdiomModal content={content} title={title} isOpen={isModalOpen} onClose={toggleModal} />, document.body)}
        <p>{text}</p>
        <div className="ps-3 flex items-center">
          <button
            className="flex justify-center items-center align-middle active:border-orange-500 hover:border-orange-300 size-7 rounded-full border border-gray-400"
            onClick={decrement}
          >
            -
          </button>
          <p className="px-5 py-2 m-1 border rounded-xl hover:border-gray-400 border-gray-600">{number}</p>
          <button
            className="flex justify-center items-center align-middle active:border-orange-500 hover:border-orange-300 size-7 rounded-full border border-gray-400"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
