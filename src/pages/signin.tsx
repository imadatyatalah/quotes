import { NextSeo } from "next-seo";

const SignIn = () => {
  return (
    <>
      <NextSeo title="Sign in" />

      <section className="py-10 sm:mx-auto sm:w-[500px]">
        <div>
          <h1 className="mb-4 text-3xl font-bold text-primary-400 sm:text-center sm:text-4xl">
            Sign in to Quotes
          </h1>
        </div>

        <form className="flex flex-col">
          <div className="mb-4 space-y-2">
            <fieldset>
              <label htmlFor="email" className="font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                className="input mt-1"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="password" className="font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                id="password"
                className="input mt-1"
              />
            </fieldset>
          </div>

          <button
            className="w-auto rounded-lg bg-primary-400 py-2 font-medium text-white"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </section>
    </>
  );
};

export default SignIn;
