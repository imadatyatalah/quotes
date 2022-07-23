import TrashIcon from "@/icons/TrashIcon";
import useQuotes from "@/stores/useQuotes";

import type { TQuote } from "@/types/quote";

const Quote = ({ quote_content, quote_author, date }: TQuote) => {
  const removeQuoteByDate = useQuotes((state) => state.removeQuoteByDate);

  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-between border text-left rounded-lg w-full p-2 mr-2">
        <div>
          <h2 className="font-medium mb-1">
            <q>{quote_content}</q>
          </h2>

          <p className="text-sm">{quote_author}</p>
        </div>

        <div>
          <button
            className="bg-red-500 p-1 rounded-lg text-white"
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
