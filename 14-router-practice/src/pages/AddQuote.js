import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

export default function AddQuote() {
  const onAddQuoteHandler = (newQuote) => {
    console.log(newQuote);
  };

  return <QuoteForm onAddQuote={onAddQuoteHandler} />;
}
