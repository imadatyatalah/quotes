import QuoteCardMenu from "./QuoteCardMenu";

import type { TQuote } from "@/types/quote";

const QuoteCard = ({ quote_content, quote_author, date }: TQuote) => {
  return (
    <div className="flex w-full justify-between rounded-lg border border-input p-2 text-left dark:border-gray-700">
      <div className="space-y-1">
        <h2 className="font-medium">
          <q>{quote_content}</q>
        </h2>

        <p className="text-sm">{quote_author}</p>
      </div>

      <div>
        <QuoteCardMenu
          quoteContent={quote_content}
          quoteAuthor={quote_author}
          date={date}
        />
      </div>
    </div>
  );
};

export default QuoteCard;
