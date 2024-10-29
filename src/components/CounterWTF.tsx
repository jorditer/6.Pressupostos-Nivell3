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


  const title = isPagines ? "Número de llenguatges" : "Número de pàgines";
  const content = isPagines
    ? "Afageix les pàgines que necessesitis per a dur a terme el teu projecte. El cost de cada pàgina és de 30€"
    : "Afageix les llengües que tindrà el teu projecte, el cost de cada llenguatge és de 30€";
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    const modalContent = (
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Modal Title
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={toggleModal} // Add onClick handler to close the modal
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <p>Hello</p>
            </div>
          </div>
        </div>
      </div>
    );
  

  return (
    <div className="flex flex-col items-end">
      <div className="flex items-center">
      <button onClick={toggleModal}>&#9432;&nbsp;</button>
        {isModalOpen && ReactDOM.createPortal(modalContent, document.body)}
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
