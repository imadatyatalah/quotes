import type { PropsWithChildren } from "react";

const Callout = (props: PropsWithChildren & { emoji: string }) => {
  return (
    <div className="flex rounded-lg bg-[#eaeaea] p-4 dark:bg-gray-800">
      <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default Callout;
