import BudgetCard from "./BudgetCard.tsx"
import { BudgetCardProps } from "./Budget.tsx";

interface StoredBudgetProps {
	budgetCards: BudgetCardProps[]
}

const StoredBudgets: React.FC<StoredBudgetProps> = ({ budgetCards  }) => {
	const hiddenClass = budgetCards.length === 0 ? 'hidden' : '';
	console.log(budgetCards);
	return (
		<>
			<h2 className={hiddenClass}>Pressupostos en curs:</h2>
			{budgetCards.map((card) => (
			<div className={`cardElement`} key={card.date}>
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
	)
}

export default StoredBudgets