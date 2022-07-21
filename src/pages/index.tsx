import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

import QuoteForm from "@/components/QuoteForm";
import useQuotes from "@/stores/useQuotes";
import Quote from "@/components/Quote";

import type { TQuote } from "@/types/quote";

const Home = () => {
  const [quotesState, setQuotesState] = useState<TQuote[]>([]);
  const quotes = useQuotes((state) => state.quotes);

  useEffect(() => {
    setQuotesState(quotes);
  }, [quotes]);

  return (
    <>
      <NextSeo title="Home" />

      <section className="px-4 py-10 space-y-10 md:px-0 sm:w-[400px] sm:my-0 sm:mx-auto sm:text-center">
        <div>
          <h1 className="text-5xl font-bold text-center text-[#09bc8a] dark:text-gray-100">
            Quotes
          </h1>
        </div>

        <QuoteForm />

        <div className="space-y-2 text-center">
          {quotesState.length !== 0
            ? quotesState.map((quote, index) => (
                <Quote {...quote} key={index} />
              ))
            : null}
        </div>
      </section>
    </>
  );
};

export default Home;
