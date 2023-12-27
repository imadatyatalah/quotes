"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/ui/button";
import useQuotes from "@/stores/useQuotes";

const SurpriseMeButton = () => {
  const [surpriseMeStatus, setSurpriseMeStatus] = useState<
    "idle" | "pending" | "error" | "success"
  >("idle");

  const addQuote = useQuotes((state) => state.addQuote);

  const handleSurpriseMeButton = async () => {
    try {
      setSurpriseMeStatus("pending");

      const res = await fetch("https://api.quotable.io/random");
      const quote = await res.json();

      addQuote(quote.content, quote.author);

      setSurpriseMeStatus("success");
    } catch (error) {
      console.log(error);

      setSurpriseMeStatus("error");
    }
  };

  return (
    <Button
      disabled={surpriseMeStatus === "pending"}
      onClick={handleSurpriseMeButton}
      size="sm"
      variant="outline"
      type="button"
    >
      {surpriseMeStatus === "pending" ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading
        </>
      ) : (
        "Surprise me"
      )}
    </Button>
  );
};

export default SurpriseMeButton;
