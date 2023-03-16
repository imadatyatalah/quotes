import { NextSeo } from "next-seo";
import useSWR from "swr";

import { fetcher } from "@/lib/fetcher";
import useQuotes from "@/stores/useQuotes";
import DiceIcon from "@/icons/DiceIcon";
import SaveIcon from "@/icons/SaveIcon";
import Button from "@/components/core/Button";

import type { RandomQuote } from "@/types/quote";

const Random = () => {
  const { data, error, mutate } = useSWR<RandomQuote>(
    "https://api.quotable.io/random",
    fetcher,
    { revalidateOnFocus: false }
  );

  const addQuote = useQuotes((state) => state.addQuote);

  if (error) return <div className="text-center">Failed to load</div>;
  if (!data) return <div className="text-center">Loading...</div>;

  return (
    <>
      <NextSeo title="Random quotes" />

      <section className="py-10">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-400">
              <q>{data.content}</q>
            </h1>

            <p className="font-medium">{data.author}</p>
          </div>

          <div className="flex justify-center space-x-2">
            <Button
              className="flex items-center"
              type="button"
              onClick={() => mutate()}
              leftIcon={<DiceIcon />}
            >
              New random quote
            </Button>

            <Button
              className="flex items-center"
              type="button"
              onClick={() => addQuote(data.content, data.author)}
              leftIcon={<SaveIcon />}
            >
              Save quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Random;
