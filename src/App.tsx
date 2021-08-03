import React, { useEffect, useState } from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BudgetForm from "./components/Budget/BudgetForm";
import BudgetList from "./components/Budget/BudgetList";
import queryClient from "./queryClient";

function App(): Nullable<JSX.Element> {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<main className="container w-3/6 mx-auto">
					<Switch>
						<Route exact path="/">
							<BudgetList />
						</Route>
						<Route path="/budget/new">
							<BudgetForm />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</main>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
