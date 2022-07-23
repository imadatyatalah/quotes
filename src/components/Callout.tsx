import type { PropsWithChildren } from "react";

const Callout = (props: PropsWithChildren & { emoji: string }) => {
  return (
    <div className="flex bg-[#eaeaea] dark:bg-gray-800 rounded-lg p-4">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default Callout;
