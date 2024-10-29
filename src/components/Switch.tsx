interface SwitchProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Switch: React.FC<SwitchProps> = ({onChange}) => {		// Hecho/robado solo con HTML y CSS

	return (
		<div className="flex justify-center gap-x-4 font-semibold">
			<p className="whitespace-nowrap">Pagament mensual</p>
			<label>
				<input onChange={onChange} className="custom-switch" type="checkbox" />
			</label>
			<p className="whitespace-nowrap">Pagament anual</p>
		</div>
	)
}

export default Switch