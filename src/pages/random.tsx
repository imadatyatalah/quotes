import { NextSeo } from "next-seo";
import useSWR from "swr";

import { fetcher } from "@/lib/fetcher";
import { useToast } from "@/ui/use-toast";
import useQuotes from "@/stores/useQuotes";
import DiceIcon from "@/icons/DiceIcon";
import SaveIcon from "@/icons/SaveIcon";
import { Button } from "@/ui/button";
import ShareQuoteModal from "@/modules/random/ShareQuoteModal";
import DownloadQuoteModal from "@/modules/random/DownloadQuoteModal";

import type { RandomQuote } from "@/types/quote";

const Random = () => {
  const { toast } = useToast();

  const { data, error, isLoading, mutate } = useSWR<RandomQuote | any>(
    "https://api.quotable.io/random",
    fetcher,
    { revalidateOnFocus: false }
  );

  const addQuote = useQuotes((state) => state.addQuote);

  if (isLoading)
    return (
      <div className="py-10">
        <div>
          <h2 className="text-center text-4xl font-bold text-primary-400">
            Loading...
          </h2>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="py-10">
        <div className="space-y-6">
          <div>
            <h2 className="text-center text-4xl font-bold text-primary-400">
              Ooops, Something went wrong
            </h2>
          </div>

          <div className="flex justify-center space-x-2">
            <Button type="button" variant="primary" onClick={() => mutate()}>
              Try again
            </Button>
          </div>
        </div>
      </div>
    );

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

          <div className="flex flex-col justify-center gap-y-3 md:flex-row md:gap-x-3 md:gap-y-0">
            <Button
              variant="primary"
              type="button"
              onClick={() => mutate()}
              className="group"
            >
              <DiceIcon className="mr-2 transition duration-200 group-hover:rotate-[90deg]" />{" "}
              New random quote
            </Button>

            <Button
              variant="primary"
              type="button"
              onClick={() => {
                addQuote(data.content, data.author);

                toast({
                  title: "Your quote has been saved successfully",
                });

                mutate();
              }}
            >
              <SaveIcon className="mr-2" /> Save quote
            </Button>

            <DownloadQuoteModal quote={data.content} author={data.author} />

            <ShareQuoteModal quote={data.content} author={data.author} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Random;
