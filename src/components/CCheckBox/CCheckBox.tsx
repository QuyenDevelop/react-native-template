import { FunctionComponent } from "react";
import { ICheckBox, CheckBoxProps } from "rn-janbox-design-system-v2";

interface CCheckBoxProps extends CheckBoxProps {}

export const CCheckBox: FunctionComponent<CCheckBoxProps> = props => {
  const { ...arg } = props;
  return <ICheckBox {...arg} />;
};
