import create from "zustand";
import { persist } from "zustand/middleware";

import { TQuote } from "@/types/quote";

interface QuortesState {
  quotes: TQuote[];
  addQuote: (quote_content: string, quote_author: string) => void;
}

const useQuotes = create<QuortesState>(
  // @ts-ignore
  persist(
    (set) => ({
      quotes: [],
      addQuote: (quote_content: string, quote_author: string) =>
        set((state) => ({
          quotes: [...state.quotes, { quote_content, quote_author }],
        })),
    }),
    {
      name: "quotes",
    }
  )
);

export default useQuotes;
