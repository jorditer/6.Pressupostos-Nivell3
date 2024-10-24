interface cardProps {
	
}

const Price = ({ price }: { price: number }) => {

	return (
		<div className="self-end">
			<h2>Preu pressupostat: <span>{price}</span>€</h2>
		</div>
	)
}

export default Price;