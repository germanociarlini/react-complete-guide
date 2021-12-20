import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddQuote from "./pages/AddQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
