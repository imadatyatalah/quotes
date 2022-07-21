import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo title="Home" />

      <section>
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-gray-100">
            Quotes
          </h1>
        </div>
      </section>
    </>
  );
};

export default Home;
