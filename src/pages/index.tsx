import { NextSeo } from "next-seo";

import QuoteForm from "@/components/QuoteForm";
import Quotes from "@/components/Quotes";

const Home = () => {
  return (
    <>
      <NextSeo title="Home" />

      <section className="py-10 space-y-10 sm:w-[500px] sm:my-0 sm:mx-auto sm:text-center">
        <div>
          <h1 className="text-5xl font-bold text-center text-primary-400 dark:text-gray-100">
            Quotes
          </h1>
        </div>

        <QuoteForm />

        <Quotes />
      </section>
    </>
  );
};

export default Home;
