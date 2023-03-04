import { FunctionComponent } from "react";
import { ICheckBox, CheckBoxProps } from "@phamquyen/rn-core-components";

interface CCheckBoxProps extends CheckBoxProps {}

export const CCheckBox: FunctionComponent<CCheckBoxProps> = props => {
  const { ...arg } = props;
  return <ICheckBox {...arg} />;
};
