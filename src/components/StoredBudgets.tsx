import React, { useState } from 'react';
import BudgetCard from './BudgetCard';
import { BudgetCardProps } from './Budget';
import BudgetNavBar from './BudgetNavBar';

interface StoredBudgetProps {
  budgetCards: BudgetCardProps[];
}

const StoredBudgets: React.FC<StoredBudgetProps> = ({ budgetCards }) => {
  const [sortedCards, setSortedCards] = useState<BudgetCardProps[]>(budgetCards);

  const sortByName = () => {
    const sorted = [...sortedCards].sort((a, b) => a.name.localeCompare(b.name));
    setSortedCards(sorted);
  };

  const sortByTotal = () => {
    const sorted = [...sortedCards].sort((a, b) => a.total - b.total);
    setSortedCards(sorted);
  };

  const sortByDateAsc = () => {
    const sorted = [...sortedCards].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    setSortedCards(sorted);
  };

  const sortByDateDesc = () => {
    const sorted = [...sortedCards].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setSortedCards(sorted);
  };

  const hiddenClass = budgetCards.length === 0 ? 'hidden' : '';

  return (
    <>
      <h2 className={hiddenClass}>Pressupostos en curs:</h2>
      <BudgetNavBar
        hidden={hiddenClass}
        sortByName={sortByName}
        sortByTotal={sortByTotal}
        sortByDateAsc={sortByDateAsc}
        sortByDateDesc={sortByDateDesc}
      />
      {sortedCards.map((card) => (
        <div className="cardElement" key={card.date}>
          <BudgetCard
            total={card.total}
            checkedStates={card.checkedStates}
            content={card.content}
            name={card.name}
            phone={card.phone}
            email={card.email}
            date={card.date}
            numIdiomes={card.numIdiomes}
            numPagines={card.numPagines}
          />
        </div>
      ))}
    </>
  );
};

export default StoredBudgets;