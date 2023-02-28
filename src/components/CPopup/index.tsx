import { FunctionComponent } from "react";
import { BasePopup, PopupProps } from "rn-janbox-design-system-v2";

interface CPopupProps extends PopupProps {}

export const CPopup: FunctionComponent<CPopupProps> = props => {
  const { ...arg } = props;
  return <BasePopup {...arg} />;
};
