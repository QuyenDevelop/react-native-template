import { FunctionComponent } from "react";
import { BaseTextInput, ITextInputProps } from "rn-janbox-design-system-v2";

interface CTextInputProps extends ITextInputProps {
  isHideClearText?: boolean;
}

export const CTextInput: FunctionComponent<CTextInputProps> = props => {
  const { isHideClearText, ...arg } = props;
  return <BaseTextInput {...arg} />;
};
