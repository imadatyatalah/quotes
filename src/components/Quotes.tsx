import { useEffect, useState } from "react";
import { Lightbulb, Loader2 } from "lucide-react";

import { Alert, AlertTitle, AlertDescription } from "@/ui/alert";
import { Button } from "@/ui/button";
import QuoteCard from "@/components/QuoteCard";
import useQuotes from "@/stores/useQuotes";

import type { TQuote } from "@/types/quote";

const SurpriseMeButton = () => {
  const [isSurpriseMeLoading, setIsSurpriseMeLoading] = useState(false);

  const addQuote = useQuotes((state) => state.addQuote);

  const handleSurpriseMeButton = async () => {
    setIsSurpriseMeLoading(true);

    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();

      addQuote(data?.content, data?.author);
    } catch (error) {
      console.log(error);
    }

    setIsSurpriseMeLoading(false);
  };

  return (
    <Button
      disabled={isSurpriseMeLoading}
      onClick={handleSurpriseMeButton}
      size="sm"
      variant="outline"
      type="button"
    >
      {isSurpriseMeLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading
        </>
      ) : (
        "Surprise me"
      )}
    </Button>
  );
};

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
          <Alert className="text-left">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>You do not have any quotes yet!</AlertTitle>

            <AlertDescription className="mt-3">
              <SurpriseMeButton />
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Quotes;
