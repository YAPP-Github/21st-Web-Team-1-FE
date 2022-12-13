import type { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  endComponents?: ReactNode;
}

//FIX : forwardRef 적용(추후에 autofocus 등을 위해 ref 사용 고려)
function InputBase({ endComponents, ...rest }: Props) {
  return (
    <div>
      <input {...rest} />
      {endComponents}
    </div>
  );
}

export default InputBase;
