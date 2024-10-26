import Header from "./Header.tsx"
import Form from "./Form.tsx"
import Budget from "./Budget.tsx"
import { CounterProvider } from "../context/CounterContext.tsx"

const Layout = () => {
	
	return (
		<CounterProvider>
		{/* <Welcome /> */}
		 <div className="bg-orange-100">
		  <Header />
		  <div className="cardsContainer">
			<Form />
			<Budget />
		  <hr className="border-t border-dotted border-gray-300 my-4" />
		  </div>
		 </div>
	   </CounterProvider>
	  )
}

export default Layout