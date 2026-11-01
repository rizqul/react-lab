import { useCallback, useState } from "react";

export function useToggleWithCallback() {
  const [value, setValue] = useState(false);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return { value, toggle };
}
