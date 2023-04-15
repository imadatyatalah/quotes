import Button from "@/components/core/Button";
import ShareIcon from "@/icons/ShareIcon";
import { twitterShareQuoteURL } from "@/lib/SocialMediaShareURLs";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, TwitterLogoIcon } from "@radix-ui/react-icons";

const ShareQuoteModal = ({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) => {
  const twitterShareURL = twitterShareQuoteURL(quote, author);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button type="button" leftIcon={<ShareIcon />}>
          Share
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA9 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[1.25rem] bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
            Share quote
          </Dialog.Title>

          <Dialog.Description className="mb-5 mt-[0.312rem] text-[15px] leading-normal text-mauve11">
            Choose a sharing option below to spread the inspiration!
          </Dialog.Description>

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

          <Dialog.Close asChild>
            <button
              className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ShareQuoteModal;
