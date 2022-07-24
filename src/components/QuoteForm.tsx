import useQuotes from "@/stores/useQuotes";

const QuoteForm = () => {
  const addQuote = useQuotes((state) => state.addQuote);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formElements = form.elements as typeof form.elements & {
      quote_content: HTMLInputElement;
      quote_author: HTMLInputElement;
    };

    addQuote(formElements.quote_content.value, formElements.quote_author.value);

    formElements.quote_content.value = "";
    formElements.quote_author.value = "";
  };

  return (
    <div className="w-full">
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="quote_content"
          id="quote_content"
          placeholder={`“Love, love again.”`}
          className="input"
          required
        />

        <input
          type="text"
          name="quote_author"
          id="quote_author"
          placeholder="John Doe"
          className="input"
          required
        />

        <button
          className="w-auto rounded-lg bg-primary-400 py-2 font-medium text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
