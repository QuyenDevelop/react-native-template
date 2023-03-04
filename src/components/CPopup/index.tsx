import { FunctionComponent } from "react";
import { BasePopup, PopupProps } from "rn-core-components";

interface CPopupProps extends PopupProps {}

export const CPopup: FunctionComponent<CPopupProps> = props => {
  const { ...arg } = props;
  return <BasePopup {...arg} />;
};
