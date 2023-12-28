import { Button } from "@/ui/button";
import { FolderDown } from "lucide-react";
import { Dialog, DialogTrigger } from "@/ui/dialog";
import DownloadQuoteModalContent from "@/components/modals/DownloadQuoteModalContent";

const DownloadQuoteModal = ({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" type="button">
          <FolderDown className="mr-2 w-5 h-5" /> Download
        </Button>
      </DialogTrigger>

      <DownloadQuoteModalContent quoteContent={quote} quoteAuthor={author} />
    </Dialog>
  );
};

export default DownloadQuoteModal;
