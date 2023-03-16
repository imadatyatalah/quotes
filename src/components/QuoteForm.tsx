import useQuotes from "@/stores/useQuotes";
import Input from "@/components/core/Inputs/Input";
import Button from "@/components/core/Button";

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
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="quote_content"
          id="quote_content"
          placeholder={`“Love, love again.”`}
          required
        />

        <Input
          type="text"
          name="quote_author"
          id="quote_author"
          placeholder="John Doe"
          required
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default QuoteForm;
