import type { InputHTMLAttributes } from "react";

import { Icon } from "@/components/common/Icon";
import { InputBase } from "@/components/common/Input";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  onReset?: () => void;
  onSearch?: (text: string) => void;
}

export const SearchInput = ({ text, onReset, onSearch, ...rest }: Props) => {
  return (
    <div className="relative flex items-center justify-start">
      <InputBase
        className="h-43 w-full rounded-22 bg-light-gray-10 pl-22 text-semi-bold text-dark-gray-10 outline-none placeholder:text-gray-10"
        {...rest}
        endComponents={
          <>
            <Icon className="absolute right-46" name="delete" onClick={onReset} />
            <Icon
              className="absolute right-16"
              name="search"
              onClick={() => {
                onSearch && text && onSearch(text);
              }}
            />
          </>
        }
      />
    </div>
  );
};
