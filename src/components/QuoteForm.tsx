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
  };

  return (
    <div className="w-full">
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="quote_content"
          id="quote_content"
          placeholder={`“Love, love again.”`}
          className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          required
        />

        <input
          type="text"
          name="quote_author"
          id="quote_author"
          placeholder="John Doe"
          className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          required
        />

        <button
          className="bg-[#09bc8a] text-white rounded-md py-2 w-auto"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
