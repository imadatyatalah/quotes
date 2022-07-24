import { NextSeo } from "next-seo";
import useSWR from "swr";

import { fetcher } from "@/lib/fetcher";

import type { RandomQuote } from "@/types/quote";

const Random = () => {
  const { data, error } = useSWR<RandomQuote>(
    "https://api.quotable.io/random",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <NextSeo title="Random quotes" />

      <section>
        <h1 className="font-medium mb-1">
          <q>{data.content}</q>
        </h1>

        <p className="text-sm">{data.author}</p>
      </section>
    </>
  );
};

export default Random;
