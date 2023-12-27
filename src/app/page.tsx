import QuoteForm from "./_components/QuoteForm";
import Quotes from "./_components/Quotes";

const HomePage = () => {
  return (
    <>
      <section className="space-y-10 py-10 sm:mx-auto sm:w-[500px] sm:text-center">
        <div>
          <h1 className="text-center text-5xl font-bold text-primary-400 dark:text-primary-500">
            Quotes
          </h1>
        </div>

        <QuoteForm />

        <Quotes />
      </section>
    </>
  );
};

export default HomePage;
