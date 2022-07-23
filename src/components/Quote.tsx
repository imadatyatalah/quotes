import TrashIcon from "@/icons/TrashIcon";
import useQuotes from "@/stores/useQuotes";

import type { TQuote } from "@/types/quote";

const Quote = ({ quote_content, quote_author, date }: TQuote) => {
  const removeQuote = useQuotes((state) => state.removeQuote);

  return (
    <div className="flex items-center justify-center">
      <div className="border rounded w-full mr-2">
        <h2>
          <q>{quote_content}</q>
        </h2>

        <p>{quote_author}</p>
      </div>

      <div>
        <button
          className="bg-red-500 p-1 rounded-full text-white"
          onClick={() => removeQuote(date)}
          type="button"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default Quote;
