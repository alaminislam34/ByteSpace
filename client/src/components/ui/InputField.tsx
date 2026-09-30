import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      error,
      id,
      name,
      className,
      containerClassName,
      labelClassName,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? name;

    return (
      <div className={cn("block w-full", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn("mb-2 block text-sm font-normal text-[#6B7280]", labelClassName)}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          name={name}
          className={cn(
            "h-12 w-full rounded-xl border border-[#E6E8EE] bg-white px-4 text-sm text-[#12141A] outline-none placeholder:text-[#B0B4BC] transition-colors focus:border-[#003BE2]",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = "InputField";
