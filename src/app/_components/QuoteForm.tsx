"use client";

import useQuotes from "@/stores/useQuotes";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { Label } from "@/ui/label";

const QuoteForm = () => {
  const addQuote = useQuotes((state) => state.addQuote);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formElements = form.elements as typeof form.elements & {
      quote_content: HTMLInputElement;
      quote_author: HTMLInputElement;
    };

    // Add quote to the store
    addQuote(formElements.quote_content.value, formElements.quote_author.value);

    // Reset
    formElements.quote_content.value = "";
    formElements.quote_author.value = "";
  };

  return (
    <div className="w-full">
      <form
        className="flex flex-col space-y-6 text-left"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2">
          <fieldset className="space-y-1">
            <Label htmlFor="quote_content">Quote</Label>

            <Input
              type="text"
              name="quote_content"
              id="quote_content"
              placeholder={`“Love, love again.”`}
              required
            />
          </fieldset>

          <fieldset className="space-y-1">
            <Label htmlFor="quote_author">Author</Label>

            <Input
              type="text"
              name="quote_author"
              id="quote_author"
              placeholder="John Doe"
              required
            />
          </fieldset>
        </div>

        <Button variant="primary" type="submit">
          Save Quote
        </Button>
      </form>
    </div>
  );
};

export default QuoteForm;
