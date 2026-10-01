"use client";

import { type FormEvent, type FC } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

export interface SearchFieldProps {
  placeholder?: string;
  buttonLabel?: string;
  name?: string;
  defaultValue?: string;
  onSearch?: (query: string) => void;
  className?: string;
  inputWrapperClassName?: string;
  inputClassName?: string;
}

export const SearchField: FC<SearchFieldProps> = ({
  placeholder = "Course, topic, creator",
  buttonLabel = "Search",
  name = "query",
  defaultValue,
  onSearch,
  className,
  inputWrapperClassName,
  inputClassName,
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onSearch?.(String(data.get(name) ?? "").trim());
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={cn("flex w-full items-center gap-3 max-w-xl", className)}
    >
      <label
        className={cn(
          "flex h-12 lg:h-14 min-w-0 flex-1 items-center gap-2.5 sm:gap-3 rounded-3xl border border-transparent bg-white px-4 sm:px-5 focus-within:ring-2 focus-within:ring-primary/70",
          inputWrapperClassName
        )}
      >
        <Search className="size-5 shrink-0 text-shuttle-400" aria-hidden="true" />
        <input
          type="text"
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={cn(
            "w-full border-none bg-transparent font-poppins text-sm sm:text-base text-shuttle-900 outline-none placeholder:text-shuttle-400 focus:outline-none focus:border-none focus:ring-0 focus:outline-transparent focus:ring-offset-0",
            inputClassName
          )}
        />
      </label>
      <Button
        type="submit"
        variant="primary"
        className="h-12 lg:h-14 rounded-3xl px-5 sm:px-8 text-sm sm:text-base shrink-0"
      >
        {buttonLabel}
      </Button>
    </form>
  );
};
