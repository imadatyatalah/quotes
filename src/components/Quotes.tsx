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
    setQuotesState(quotes);
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
          <Callout emoji="💡">
            <p className="text-[#333333] dark:text-[#eaeaea]">
              You do not have any quotes yet!
            </p>
          </Callout>
        )}
      </div>
    </div>
  );
};

export default Quotes;
