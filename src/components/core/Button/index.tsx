import { twMerge } from "tailwind-merge";

import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

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
  isLoading?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      rightIcon,
      leftIcon,
      size = "md",
      variant = "default",
      isLoading,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        className={twMerge(
          "flex items-center justify-center rounded-lg transition duration-200 active:scale-95",
          VARIANTS[variant],
          SIZES[size],
          className
        )}
        disabled={disabled || isLoading}
        {...rest}
      >
        {leftIcon ? <span className={twMerge("mr-2")}>{leftIcon}</span> : null}

        <span>{children}</span>

        {rightIcon ? (
          <span className={twMerge("ml-2")}>{rightIcon}</span>
        ) : null}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
