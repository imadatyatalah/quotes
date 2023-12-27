import type { Metadata } from "next";
import RandomPageClient from "./client";

export const metadata: Metadata = {
  title: "Random",
};

const RandomPage = () => {
  return <RandomPageClient />;
};

export default RandomPage;
