import { FunctionComponent } from "react";
import { BaseTextInput, ITextInputProps } from "rn-janbox-design-system-v2";

interface CTextInputProps extends ITextInputProps {}

export const CTextInput: FunctionComponent<CTextInputProps> = props => {
  const { ...arg } = props;
  return <BaseTextInput {...arg} />;
};
