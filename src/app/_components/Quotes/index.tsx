"use client";

import { useEffect, useState } from "react";

import { Button } from "@/ui/button";
import QuoteCard from "@/components/QuoteCard";
import useQuotes from "@/stores/useQuotes";
import SurpriseMeButton from "./SurpriseMeButton";

import type { TQuote } from "@/types/quote";
import NoQuotesFound from "./NoQuotesFound";

const Quotes = () => {
  const [quotesState, setQuotesState] = useState<TQuote[]>([]);

  const quotes = useQuotes((state) => state.quotes);
  const removeAllQuotes = useQuotes((state) => state.removeAllQuotes);

  useEffect(() => {
    setQuotesState(
      quotes.sort(
        (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
      )
    );
  }, [quotes]);

  return (
    <div className="space-y-4">
      {quotesState.length !== 0 ? (
        <div className="flex items-center justify-between">
          <SurpriseMeButton />

          <div className="flex justify-center">
            <Button
              size="sm"
              variant="destructive"
              onClick={removeAllQuotes}
              type="button"
            >
              Delete all quotes
            </Button>
          </div>
        </div>
      ) : null}

      <div className="space-y-2">
        {quotesState.length !== 0 ? (
          quotesState.map((quote, index) => (
            <QuoteCard {...quote} key={index} />
          ))
        ) : (
          <NoQuotesFound />
        )}
      </div>
    </div>
  );
};

export default Quotes;
