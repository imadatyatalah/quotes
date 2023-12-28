import { DotsVerticalIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

import useQuotes from "@/stores/useQuotes";
import { Dialog, DialogTrigger } from "@/ui/dialog";
import DownloadQuoteModalContent from "../modals/DownloadQuoteModalContent";

type Props = {
  date: Date;
  quoteContent: string;
  quoteAuthor: string;
};

const QuoteCardMenu = ({ quoteAuthor, quoteContent, date }: Props) => {
  const removeQuoteByDate = useQuotes((state) => state.removeQuoteByDate);

  const handleRemoveQuote = () => removeQuoteByDate(date);

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger className="p-1">
          <DotsVerticalIcon />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleRemoveQuote}>
            Delete quote
          </DropdownMenuItem>

          <DialogTrigger asChild>
            <DropdownMenuItem>Download</DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      <DownloadQuoteModalContent
        quoteContent={quoteContent}
        quoteAuthor={quoteAuthor}
      />
    </Dialog>
  );
};

export default QuoteCardMenu;
