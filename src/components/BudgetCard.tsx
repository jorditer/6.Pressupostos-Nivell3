import { BudgetCardProps } from "./Budget";


const BudgetCard: React.FC<BudgetCardProps> = ({ total, checkedStates, content, name, email, phone, numPagines, numIdiomes }) => {

const pagines = numPagines > 1 ? "pàgines" : "pàgina";
const idiomes = numIdiomes > 1 ? "idiomes" : "idioma";
	return (
		<div>
			<div className="flex flex-row justify-between">
				<div className="">
					<h2>{name}</h2>
					<p className="text-slate-500">{email}</p>
					<p className="text-slate-500">{phone}</p>
				</div>
				<div className="serveis basis-1/3">
						<p>Serveis contractats:</p>
						<ul>
						{checkedStates.map((isChecked, index) =>
							isChecked && (
							<li key={index}>{content[index].title === "Web" ?
								`Web (${numPagines} ${pagines} i ${numIdiomes} ${idiomes})`
								: content[index].title}
							</li>
						)
						)}
						</ul>
				</div>
				<div className="">
					<p className="text-slate-500 text-2xl font-semibold">Total:</p>
					<h2><span>{total}</span>€</h2>
				</div>
			</div>
		</div>
	)
}

export default BudgetCard;