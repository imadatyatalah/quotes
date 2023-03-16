import TrashIcon from "@/icons/TrashIcon";
import useQuotes from "@/stores/useQuotes";
import Button from "@/components/core/Button";

import type { TQuote } from "@/types/quote";

const Quote = ({ quote_content, quote_author, date }: TQuote) => {
  const removeQuoteByDate = useQuotes((state) => state.removeQuoteByDate);

  const handleRemoveQuote = () => removeQuoteByDate(date);

  return (
    <div className="flex w-full justify-between rounded-lg border-2 border-gray-200 p-2 text-left dark:border-gray-700">
      <div className="space-y-1">
        <h2 className="font-medium">
          <q>{quote_content}</q>
        </h2>

        <p className="text-sm">{quote_author}</p>
      </div>

      <div>
        <Button
          className="p-1"
          variant="danger"
          onClick={handleRemoveQuote}
          type="button"
        >
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default Quote;
