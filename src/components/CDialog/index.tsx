import { FunctionComponent } from "react";
import { BaseDialog, DialogProps } from "@phamquyen/rn-core-components";

interface CDialogProps extends DialogProps {}

export const CDialog: FunctionComponent<CDialogProps> = props => {
  const { ...arg } = props;
  return <BaseDialog {...arg} />;
};
