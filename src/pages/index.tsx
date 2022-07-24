import { NextSeo } from "next-seo";

import QuoteForm from "@/components/QuoteForm";
import Quotes from "@/components/Quotes";

const Home = () => {
  return (
    <>
      <NextSeo title="Home" />

      <section className="space-y-10 py-10 sm:mx-auto sm:w-[500px] sm:text-center">
        <div>
          <h1 className="text-center text-5xl font-bold text-primary-400">
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
