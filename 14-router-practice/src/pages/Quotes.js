import React from "react";
import QuoteList from "../components/quotes/QuoteList";

export const DUMMY_QUOTES = [
  { id: "1", author: "Pretentious Prick", text: "Chatting 'Nice Cock bro'" },
  { id: "2", author: "Edgy Esshole", text: "A word from our sponsors" },
  { id: "3", author: "Arty Fartsy", text: "Arrasta pra cima" },
  { id: "4", author: "Showy Schmuck", text: "dae bruh moment???" },
  { id: "5", author: "Capcom Nigga", text: "why are you black?" },
];

export default function Quotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}
