import BudgetCard from "./BudgetCard.tsx"
import { BudgetCardProps } from "./Budget.tsx";

interface StoredBudgetProps {
	budgetCards: BudgetCardProps[]
}

const StoredBudgets: React.FC<StoredBudgetProps> = ({ budgetCards  }) => {
const hiddenClass = budgetCards.length === 0 ? 'hidden' : '';

	return (
		<>
			<h2 className={hiddenClass}>Pressupostos en curs:</h2>
			{budgetCards.map((card, index) => (
			<div className={`cardElement`}>
				<BudgetCard
					key={index}
					total={card.total}
					checkedStates={card.checkedStates}
					content={card.content}
					name={card.name}
					phone={card.phone}
					email={card.email}
				/>
			</div>
			))}
		</>
	)
}

export default StoredBudgets