import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";
import AddQuote from "./pages/AddQuote";
import { Switch, Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/quotes">Quotes</NavLink>
          </li>
          <li>
            <NavLink to="/add-quote">Add Quote</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Switch>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/add-quote">
            <AddQuote />
          </Route>
          <Route path="/">
            <Redirect to="/quotes" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
