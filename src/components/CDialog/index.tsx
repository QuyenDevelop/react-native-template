import { FunctionComponent } from "react";
import { BaseDialog, DialogProps } from "rn-janbox-design-system-v2";

interface CDialogProps extends DialogProps {}

export const CDialog: FunctionComponent<CDialogProps> = (props) => {
  const { ...arg } = props;
  return <BaseDialog {...arg} />;
};
