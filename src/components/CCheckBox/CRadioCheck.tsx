import { FunctionComponent } from "react";
import { IRadioCheckBox, CheckBoxProps } from "rn-janbox-design-system-v2";

interface CRadioCheckProps extends CheckBoxProps {}

export const CRadioCheck: FunctionComponent<CRadioCheckProps> = props => {
  const { ...arg } = props;
  return <IRadioCheckBox {...arg} />;
};
