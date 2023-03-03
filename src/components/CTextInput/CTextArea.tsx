import { FunctionComponent } from "react";
import { BaseTextArea, ITextareaProps } from "rn-janbox-design-system-v2";

interface CTextAreaProps extends ITextareaProps {}

export const CTextArea: FunctionComponent<CTextAreaProps> = props => {
  const { ...arg } = props;
  return <BaseTextArea {...arg} />;
};
