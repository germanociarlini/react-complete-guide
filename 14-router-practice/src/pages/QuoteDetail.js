import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { DUMMY_QUOTES } from "./Quotes";

export default function QuoteDetail() {
  const { quoteId } = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <p>No quote found...</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path="/quotes/:quoteId/comments" exact>
        <Comments />
      </Route>
    </>
  );
}
