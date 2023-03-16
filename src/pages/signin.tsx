import Input from "@/components/core/Inputs/Input";
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
            <Input label="Email" type="email" name="email" id="email" />

            <Input
              label="Password"
              type="password"
              name="password"
              id="password"
            />
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
