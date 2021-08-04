import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BudgetsPage from "./pages/budget/BudgetsPage";
import CreateBudgetPage from "./pages/budget/CreateBudgetPage";
import NotFoundPage from "./pages/NotFoundPage";
import queryClient from "./queryClient";

function App(): Nullable<JSX.Element> {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<BudgetsPage />
					</Route>
					<Route path="/budget/new">
						<CreateBudgetPage />
					</Route>
					<Route path="/budget/:budgetId">
						<CreateBudgetPage />
					</Route>
					<Route>
						<NotFoundPage/>
					</Route>
				</Switch>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
