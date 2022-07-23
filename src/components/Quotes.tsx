import { useEffect, useState } from "react";

import Callout from "@/components/Callout";
import useQuotes from "@/stores/useQuotes";
import TrashIcon from "@/icons/TrashIcon";
import Quote from "@/components/Quote";

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
          className="bg-red-500 p-1 rounded-full text-white"
          onClick={removeAllQuotes}
          type="button"
        >
          <TrashIcon />
        </button>
      ) : null}

      <div className="space-y-2">
        {quotesState.length !== 0 ? (
          quotesState.map((quote, index) => <Quote {...quote} key={index} />)
        ) : (
          <Callout emoji="💡">
            <p className="text-[#333333] dark:text-[#eaeaea]">
              You have not created any quotes yet!
            </p>
          </Callout>
        )}
      </div>
    </div>
  );
};

export default Quotes;
