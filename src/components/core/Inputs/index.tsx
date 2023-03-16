import { twMerge } from "tailwind-merge";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  containerClassName?: string;
  labelClassName?: string;
  label?: string;
}

const Input = ({
  containerClassName = "",
  labelClassName = "",
  className,
  id,
  label,
  ...rest
}: InputProps) => {
  return (
    <fieldset className={twMerge("space-y-1", containerClassName)}>
      {label ? (
        <label className={twMerge("font-medium", labelClassName)} htmlFor={id}>
          {label}
        </label>
      ) : null}

      <input
        className={twMerge(
          "m-0 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none",
          className
        )}
        id={id}
        {...rest}
      />
    </fieldset>
  );
};

export default Input;
