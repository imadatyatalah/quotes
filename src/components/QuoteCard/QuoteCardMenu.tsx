import { DotsVerticalIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

import useQuotes from "@/stores/useQuotes";

type Props = {
  date: Date;
};

const QuoteCard = ({ date }: Props) => {
  const removeQuoteByDate = useQuotes((state) => state.removeQuoteByDate);

  const handleRemoveQuote = () => removeQuoteByDate(date);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <DotsVerticalIcon />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleRemoveQuote}>
          Delete quote
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default QuoteCard;
