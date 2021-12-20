import React from "react";
import { useParams } from "react-router-dom";

export default function QuoteDetail() {
  const { quoteId } = useParams();
  return <h1>Quote {quoteId}</h1>;
}
