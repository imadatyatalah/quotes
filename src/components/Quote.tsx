import TrashIcon from "@/icons/TrashIcon";
import useQuotes from "@/stores/useQuotes";

import type { TQuote } from "@/types/quote";

const Quote = ({ quote_content, quote_author, date }: TQuote) => {
  const removeQuoteByDate = useQuotes((state) => state.removeQuoteByDate);

  return (
    <div className="flex items-center justify-center">
      <div className="mr-2 flex w-full justify-between rounded-lg border-2 border-gray-200 p-2 text-left dark:border-gray-700">
        <div>
          <h2 className="mb-1 font-medium">
            <q>{quote_content}</q>
          </h2>

          <p className="text-sm">{quote_author}</p>
        </div>

        <div>
          <button
            className="rounded-lg bg-red-500 p-1 text-white"
            onClick={() => removeQuoteByDate(date)}
            type="button"
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
