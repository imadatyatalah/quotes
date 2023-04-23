import { Button } from "@/ui/button";
import ShareIcon from "@/icons/ShareIcon";
import { twitterShareQuoteURL } from "@/lib/SocialMediaShareURLs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";

import { TwitterLogoIcon } from "@radix-ui/react-icons";

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
          <ShareIcon className="mr-2" /> Share
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
          {/* Twitter */}
          <a
            href={twitterShareURL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1DA1F2] p-5"
          >
            <TwitterLogoIcon className="h-6 w-6 text-white" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareQuoteModal;
