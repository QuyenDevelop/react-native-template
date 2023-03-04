import { FunctionComponent } from "react";
import { IRadioCheckBox, CheckBoxProps } from "rn-core-components";

interface CRadioCheckProps extends CheckBoxProps {}

export const CRadioCheck: FunctionComponent<CRadioCheckProps> = props => {
  const { ...arg } = props;
  return <IRadioCheckBox {...arg} />;
};
