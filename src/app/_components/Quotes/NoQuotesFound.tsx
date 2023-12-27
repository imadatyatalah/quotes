import { Lightbulb } from "lucide-react";

import { Alert, AlertTitle, AlertDescription } from "@/ui/alert";
import SurpriseMeButton from "./SurpriseMeButton";

const NoQuotesFound = () => {
  return (
    <Alert className="text-left">
      <Lightbulb className="h-4 w-4" />
      <AlertTitle>You do not have any quotes yet!</AlertTitle>

      <AlertDescription className="mt-3">
        <SurpriseMeButton />
      </AlertDescription>
    </Alert>
  );
};

export default NoQuotesFound;
