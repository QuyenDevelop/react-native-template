import { FunctionComponent } from "react";
import { BaseTextArea, ITextareaProps } from "rn-core-components";

interface CTextAreaProps extends ITextareaProps {}

export const CTextArea: FunctionComponent<CTextAreaProps> = props => {
  const { ...arg } = props;
  return <BaseTextArea {...arg} />;
};
