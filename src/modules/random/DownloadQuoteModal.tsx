import { Button } from "@/ui/button";
import FolderArrowDown from "@/icons/FolderArrowDown";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { saveAs } from "file-saver";
import { baseUrl } from "@/lib/constants";

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
  const [imageSize, setImageSize] = useState<ImageSizes>({
    height: 1080,
    width: 1920,
  });

  const image = `${baseUrl}/og?quote=${quote}&author=${author}&width=${imageSize.width}&height=${imageSize.height}`;

  const handleDownloadImage = () => {
    if (image) {
      saveAs(image);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" type="button">
          <FolderArrowDown className="mr-2" /> Download
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Download quote</DialogTitle>
          <DialogDescription>
            Choose a background image for the quote and create a unique image to
            share or use as a wallpaper.
          </DialogDescription>
        </DialogHeader>

        <div>
          <Image
            src={image}
            width={imageSize.width}
            height={imageSize.height}
            alt=""
            className="rounded-lg"
          />
        </div>

        <DialogFooter>
          <div className="flex justify-end">
            <Button
              variant="primary"
              onClick={handleDownloadImage}
              type="button"
            >
              Download image
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadQuoteModal;
