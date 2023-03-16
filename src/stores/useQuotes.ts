import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { TQuote } from "@/types/quote";

interface QuortesState {
  quotes: TQuote[];
  addQuote: (quote_content: string, quote_author: string) => void;
  removeAllQuotes: () => void;
  removeQuoteByDate: (date: Date) => void;
}

const useQuotes = create<QuortesState>(
  // @ts-ignore
  persist(
    (set) => ({
      quotes: [],
      addQuote: (quote_content: string, quote_author: string) =>
        set((state) => ({
          quotes: [
            ...state.quotes,
            { quote_content, quote_author, date: new Date() },
          ],
        })),
      removeAllQuotes: () => set({ quotes: [] }),
      // here `date` plays the role of id
      removeQuoteByDate: (date: Date) =>
        set((state) => ({
          quotes: state.quotes.filter((quote) => quote.date !== date),
        })),
    }),
    {
      name: "quotes",
    }
  )
);

export default useQuotes;
