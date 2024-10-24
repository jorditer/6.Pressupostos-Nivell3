import { useState } from 'react'
import Card from "./Card"
import Price from "./Price"

const Form = () => {

	const content = [
		{
			title: "Seo",
			text: "Programació d'una web responsive completa",
			preu: 300,
		},
		{
			title: "Ads",
			text: "Programació d'una web responsive completa",
			preu: 400,
		},
		{
			title: "Web",
			text: "Programació d'una web responsive completa",
			preu: 500,
		}
	]
	const [checkedStates, setCheckedStates] = useState([false, false, false]);
	const [numPagines, setNumPagines] = useState(0);
	const [numIdiomes, setNumIdiomes] = useState(0);

	const handleCheckboxChange = (index:number) => {
	  const newCheckedStates = [...checkedStates];
	  newCheckedStates[index] = !newCheckedStates[index];
	  setCheckedStates(newCheckedStates);
	};

	const subtotal = content.reduce((sum, item, index) => sum + (checkedStates[index] ? item.preu : 0), 0);
	const total = subtotal + (numPagines + numIdiomes) * 4;

	return (
	  <div className="mx-5 md:mx-20 lg:mx-40 flex flex-col gap-10 my-8">
		{content.map((item, index) => (
		  <Card
			key={index}
			title={item.title}
			text={item.text}
			preu={item.preu}
			checked={checkedStates[index]}
			onChange={() => handleCheckboxChange(index)}
			total={total}
		  />
		))}
		<Price
		price={total}
		/>
	  </div>
	);
  };
  
  export default Form
