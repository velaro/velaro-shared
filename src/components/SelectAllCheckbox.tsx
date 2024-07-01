import * as React from "react";

interface Props {
  id?: string;
  className?: string;
  allSelected: boolean;
  someSelected: boolean;
  onChange(checked: boolean): void;
}

export default function SelectAllCheckbox(props: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { allSelected, someSelected, onChange, ...rest } = props;

  React.useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    const input = inputRef.current;
    input.checked = allSelected;
    input.indeterminate = !allSelected && someSelected;
  }, [allSelected, someSelected]);

  React.useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    const input = inputRef.current;

    function handleChange(e: any) {
      onChange(e.currentTarget.checked);
    }

    input.addEventListener("change", handleChange);

    return () => {
      input.removeEventListener("change", handleChange);
    };
  }, [onChange]);

  return <input ref={inputRef} type="checkbox" {...rest} />;
}
