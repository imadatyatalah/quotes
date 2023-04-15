import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

import useQuotes from "@/stores/useQuotes";

type Props = {
  date: Date;
};

const QuoteCard = ({ date }: Props) => {
  const removeQuoteByDate = useQuotes((state) => state.removeQuoteByDate);

  const handleRemoveQuote = () => removeQuoteByDate(date);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="inline-flex items-center justify-center rounded-lg bg-white p-2 shadow-[0_2px_10px] shadow-blackA7 outline-none dark:bg-gray-800"
          aria-label="Customise options"
        >
          <DotsVerticalIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[175px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade dark:bg-gray-800"
          sideOffset={5}
          align="end"
        >
          <DropdownMenu.Item
            onClick={handleRemoveQuote}
            className="group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] text-[13px] font-medium leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-red-500 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
          >
            Remove quote
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white dark:fill-gray-800" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default QuoteCard;
