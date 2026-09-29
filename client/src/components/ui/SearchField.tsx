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
}

export const SearchField: FC<SearchFieldProps> = ({
  placeholder = "Course, topic, creator",
  buttonLabel = "Search",
  name = "query",
  defaultValue,
  onSearch,
  className,
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
      className={cn("flex w-full items-center gap-3 max-w-xl mx-auto", className)}
    >
      <label className="flex h-14 min-w-0 flex-1 items-center gap-3 rounded-3xl border-0 bg-white px-5 focus-within:ring-2 focus-within:ring-primary/70">
        <Search className="size-5 shrink-0 text-shuttle-400" aria-hidden="true" />
        <input
          type="text"
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full border-0 bg-transparent font-poppins text-base text-shuttle-900 outline-none placeholder:text-shuttle-400"
        />
      </label>
      <Button
        type="submit"
        variant="primary"
        className="h-14 rounded-3xl px-8 text-base"
      >
        {buttonLabel}
      </Button>
    </form>
  );
};
