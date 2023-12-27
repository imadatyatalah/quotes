import { Button } from "@/ui/button";
import { Share2 } from "lucide-react";
import { twitterShareQuoteURL } from "@/lib/SocialMediaShareURLs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";

import XIcon from "@/icons/X";

type Props = {
  quote: string;
  author: string;
};

const ShareQuoteModal = ({ quote, author }: Props) => {
  const twitterShareURL = twitterShareQuoteURL(quote, author);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" type="button">
          <Share2 className="mr-2 w-5 h-5" /> Share
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share quote</DialogTitle>
          <DialogDescription>
            Choose a sharing option below to spread the inspiration!
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-2">
          {/* X */}
          <a
            href={twitterShareURL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1DA1F2] p-3"
          >
            <XIcon className="h-5 w-5 text-white" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareQuoteModal;
