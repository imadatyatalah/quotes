import Button from "@/components/core/Button";
import FolderArrowDown from "@/icons/FolderArrowDown";
import { createQuoteImage } from "@/lib/createQuoteImage";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";
import { saveAs } from "file-saver";

type ImageSizes = {
  height: number;
  width: number;
};

const DownloadQuoteModal = ({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(
    "v1679249576/winter-gradient_p9g3vw.png"
  );
  const [imageSize, setImageSize] = useState<ImageSizes>({
    height: 1080,
    width: 1920,
  });

  const imageWithQuoteURL = createQuoteImage({
    author: author,
    quote: quote,
    backgroundImage: backgroundImage,
    height: imageSize.height,
    width: imageSize.width,
  });

  const handleDownloadImage = () => {
    if (imageWithQuoteURL) {
      saveAs(imageWithQuoteURL);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button type="button" leftIcon={<FolderArrowDown />}>
          Download
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA9 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[1.25rem] bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
            Download quote
          </Dialog.Title>

          <Dialog.Description className="mt-[0.312rem] mb-5 text-[15px] leading-normal text-mauve11">
            Choose background image for the quote and create a unique image to
            share or use as a wallpaper.
          </Dialog.Description>

          <div className="space-y-4">
            <div className="">
              <Image
                src={imageWithQuoteURL}
                width={imageSize.width}
                height={imageSize.height}
                alt=""
                onLoadingComplete={() => setIsImageLoading(false)}
                className="rounded-lg"
              />
            </div>

            <div className="flex justify-end">
              <Button
                isLoading={isImageLoading}
                onClick={handleDownloadImage}
                type="button"
              >
                Download image
              </Button>
            </div>
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
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

export default DownloadQuoteModal;
