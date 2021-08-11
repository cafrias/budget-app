import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import queryClient from "./queryClient";
import BudgetsPage from "./pages/budget/BudgetsPage";
import CreateBudgetPage from "./pages/budget/CreateBudgetPage";
import ShowBudgetPage from "./pages/budget/ShowBudgetPage";
import NotFoundPage from "./pages/NotFoundPage";

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
						<ShowBudgetPage />
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
