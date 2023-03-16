import { useEffect, useState } from "react";

import Quote from "@/components/Quote";
import Callout from "@/components/Callout";
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
    <div>
      {quotesState.length !== 0 ? (
        <button
          className="mb-2 rounded-lg bg-red-500 py-1 px-4 font-medium text-white"
          onClick={removeAllQuotes}
          type="button"
        >
          Delete all quotes
        </button>
      ) : null}

      <div className="space-y-2">
        {quotesState.length !== 0 ? (
          quotesState.map((quote, index) => <Quote {...quote} key={index} />)
        ) : (
          <div className="flex rounded-lg bg-gray-200 p-4 dark:bg-gray-700">
            <p className="w-full text-[#333333] dark:text-[#eaeaea]">
              You do not have any quotes yet!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quotes;
