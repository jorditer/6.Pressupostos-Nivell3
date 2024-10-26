// import { useState } from "react";
import BudgetCard from "./BudgetCard.tsx"


const StoredBudgets = ({ total, checkedStates, content }) => {
	return (
		<>
			<h2>Pressupostos en curs:</h2>
			<div className="cardElement">
				<BudgetCard />
			</div>
		</>
	)
}

export default StoredBudgets