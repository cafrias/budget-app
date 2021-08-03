import React, { useEffect, useState } from "react";
import BudgetForm from "./components/Budget/BudgetForm";

function App(): JSX.Element | null {
	const [value, setValue] = useState(true);

	useEffect(() => {
		if (value) {
			console.log("Value is true");
		}
	}, [value]);

	return (
		<main className="container w-3/6 mx-auto">
			<BudgetForm/>
		</main>
	);
}

export default App;
