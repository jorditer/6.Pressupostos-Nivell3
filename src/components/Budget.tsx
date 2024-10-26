import StoredBudgets from "./StoredBudgets";
import { useCounterContext } from "../context/CounterContext";
import React, { useState } from "react";
import { Item } from "../context/CounterContext";

interface BudgetCard {
  total: number;
  checkedStates: boolean[];
  content: Item[];
}

const Budget: React.FC = () => {
  const { total, content, checkedStates } = useCounterContext();

  const [budgetCards, setBudgetCards] = useState<BudgetCard[]>([]);

  const handleAddBudgetCard = () => {
    const newCard: BudgetCard = {
      total,
      checkedStates,
      content,
    };

    setBudgetCards([...budgetCards, newCard]);
  };

  return (
    <>
      <div className="cardElement">
        <div>
          <h2 className="mb-7 text-center md:text-start">Demanar pressupost:</h2>
          <div className="cardContent flex flex-col md:flex-row justify-between gap-y-4 gap-x-1 lg:gap-x-3">
            <input
              className="min-w-0  flex-1 active:outline focus:shadow-lg shadow-sm border-2 border-gray-500 rounded-md py-2 pl-2"
              type="text"
              name="nom"
              placeholder="Nom"
              id="name"
            />
            <input
              className="min-w-0  flex-1 active:outline focus:shadow-lg shadow-sm border-2 border-gray-500 rounded-md py-2 pl-2"
              type="tel"
              name="telefon"
              placeholder="Telefon"
              id="phone"
            />
            <input
              className="min-w-0  flex-1 active:outline focus:shadow-lg shadow-sm border-2 border-gray-500 rounded-md py-2 pl-2"
              type="email"
              name="e-mail"
              placeholder="E-mail"
              id="email"
            />
            <button
              onClick={() => {
                if (checkedStates[0] || checkedStates[1] || checkedStates[2]) {
                  handleAddBudgetCard();
                }
              }}
              className="whitespace-nowrap w-auto flex-1  textbold bg-orange-400 rounded shadow-md py-2 px-4 font-medium text-orange-950 hover:shadow-lg hover:outline outline-orange-300 active:ring ring-orange-700 active:outline-orange-400 active:shadow-xl "
            >
              Sol·licitar pressupost <em className="inline md:hidden lg:inline font-3xl font-extrabold">&rarr;</em>
            </button>
          </div>
        </div>
      </div>
			{budgetCards.map((card, index) => (
				<StoredBudgets
					key={index}
					total={card.total}
					checkedStates={card.checkedStates}
					content={card.content}
				/>
			))}
    </>
  );
};

export default Budget;
