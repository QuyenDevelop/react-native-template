import { useCallback, useState } from "react";

export const useBoolean = (defaultValue?: boolean) => {
  const [isShow, setIsShow] = useState<boolean>(!!defaultValue);
  const show = useCallback(() => {
    setIsShow(true);
  }, []);
  const hide = useCallback(() => {
    setIsShow(false);
  }, []);
  const toggle = useCallback(() => {
    setIsShow((prev) => !prev);
  }, []);
  return [isShow, show, hide, toggle] as const;
};
