import { twMerge } from "tailwind-merge";

import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const VARIANTS = {
  default: "bg-primary-400 text-white",
  danger: "bg-red-500 text-white",
};

const SIZES = {
  sm: "py-1 px-4 font-medium",
  md: "py-2 px-4 font-medium",
};

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /**
   * The size of the button.
   * @default medium
   */
  size?: keyof typeof SIZES;
  /**
   * The variant of the button.
   * @default primary
   */
  variant?: keyof typeof VARIANTS;

  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
};

const Button = ({
  children,
  className,
  rightIcon,
  leftIcon,
  size = "md",
  variant = "default",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center rounded-lg",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...rest}
    >
      {leftIcon ? <span className={twMerge("mr-2")}>{leftIcon}</span> : null}

      <span>{children}</span>

      {rightIcon ? <span className={twMerge("ml-2")}>{rightIcon}</span> : null}
    </button>
  );
};

export default Button;
