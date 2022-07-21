import type { TQuote } from "@/types/quote";

const Quote = ({ quote_content, quote_author }: TQuote) => {
  return (
    <div>
      <h2>
        <q>{quote_content}</q>
      </h2>

      <p>{quote_author}</p>
    </div>
  );
};

export default Quote;
