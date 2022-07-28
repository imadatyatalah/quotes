import { NextSeo } from "next-seo";
import useSWR from "swr";

import { fetcher } from "@/lib/fetcher";

import type { RandomQuote } from "@/types/quote";

const Random = () => {
  const { data, error } = useSWR<RandomQuote>(
    "https://api.quotable.io/random",
    fetcher
  );

  if (error) return <div className="text-center">Failed to load</div>;
  if (!data) return <div className="text-center">Loading...</div>;

  return (
    <>
      <NextSeo title="Random quotes" />

      <section className="py-10">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary-400">
            <q>{data.content}</q>
          </h1>

          <p className="font-medium">By {data.author}</p>
        </div>
      </section>
    </>
  );
};

export default Random;
