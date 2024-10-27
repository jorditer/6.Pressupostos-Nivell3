import { BudgetCardProps } from "./Budget";
import { useCounterContext } from "../context/CounterContext";


const BudgetCard: React.FC<BudgetCardProps> = ({ total, checkedStates, content, name, email, phone }) => {
const {numPagines, numIdiomes} = useCounterContext();

const pagines = numPagines > 1 ? "pàgines" : "pàgina";
const idiomes = numIdiomes > 1 ? "idiomes" : "idioma";
	return (
		<div>
			<div>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
					<p>{phone}</p>
				</div>
				<div>
					<p>Serveis contractats:</p>
					<ul>
					{checkedStates.map((isChecked, index) => 
										isChecked && <li key={index}>{content[index].title === "Web" ? `Web (${numPagines} ${pagines} i ${numIdiomes} ${idiomes})` : content[index].title}</li>
					)}
					</ul>
				</div>
				<div>
					<p>Total:</p>
					<h2><span>{total}</span>€</h2>
				</div>
			</div>
		</div>
	)
}

export default BudgetCard;