import { Button } from "@/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ui/dialog";
import Image from "next/image";
import { saveAs } from "file-saver";
import { baseUrl } from "@/lib/constants";

const DownloadQuoteModalContent = ({
  quoteContent,
  quoteAuthor,
}: {
  quoteContent: string;
  quoteAuthor: string;
}) => {
  const imageSize = {
    height: 1080,
    width: 1920,
  };

  const image = `${baseUrl}/og?quote=${quoteContent}&author=${quoteAuthor}&width=${imageSize.width}&height=${imageSize.height}`;

  const handleDownloadImage = () => {
    if (image) {
      saveAs(image);
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Download quote</DialogTitle>
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
        <Button
          variant="primary"
          className="w-full"
          onClick={handleDownloadImage}
          type="button"
        >
          Download image
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DownloadQuoteModalContent;
