import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

export default function AddQuote() {
  const history = useHistory();

  const onAddQuoteHandler = (newQuote) => {
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={onAddQuoteHandler} />;
}
