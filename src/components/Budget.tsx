
const Budget = () => {

	return (
		<div className="cardElement">
			<div>
				<h2 className="mb-7 text-center md:text-start">Demanar pressupost:</h2>
				<div className="cardContent flex flex-col md:flex-row justify-between gap-5">
					<input className="min-w-0  flex-1 active:outline focus:shadow-lg shadow-sm border-2 border-gray-500 rounded-md py-2 pl-2" type="text" name="" placeholder="Nom" id="" />
					<input className="min-w-0  flex-1 active:outline focus:shadow-lg shadow-sm border-2 border-gray-500 rounded-md py-2 pl-2" type="tel" name="telefon" placeholder="Telefon" id="" />
					<input className="min-w-0  flex-1 active:outline focus:shadow-lg shadow-sm border-2 border-gray-500 rounded-md py-2 pl-2" type="email" name="e-mail" placeholder="E-mail" id="" />
					<button className="whitespace-nowrap w-auto flex-1  textbold bg-orange-400 rounded shadow-md py-2 px-4 font-medium text-orange-950 hover:shadow-lg hover:outline outline-orange-300 active:ring ring-orange-700 active:outline-orange-400 active:shadow-xl ">Sol·licitar pressupost <em className="inline md:hidden lg:inline font-3xl font-extrabold">&rarr;</em></button>
				</div>
			</div>
		</div>
	)
}

export default Budget;