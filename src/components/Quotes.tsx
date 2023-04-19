import { useEffect, useState } from "react";
import { Lightbulb } from "lucide-react";

import { Alert, AlertTitle } from "@/ui/alert";
import QuoteCard from "@/components/QuoteCard";
import { Button } from "@/ui/button";
import useQuotes from "@/stores/useQuotes";

import type { TQuote } from "@/types/quote";

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
    <div className="space-y-2">
      {quotesState.length !== 0 ? (
        <div className="flex justify-center">
          <Button variant="destructive" onClick={removeAllQuotes} type="button">
            Delete all quotes
          </Button>
        </div>
      ) : null}

      <div className="space-y-2">
        {quotesState.length !== 0 ? (
          quotesState.map((quote, index) => (
            <QuoteCard {...quote} key={index} />
          ))
        ) : (
          <Alert className="text-left">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>You do not have any quotes yet!</AlertTitle>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Quotes;
